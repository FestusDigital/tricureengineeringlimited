import { useState, type FormEvent } from "react";
import { CalendarDays, Copy, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, whatsappUrl } from "@/lib/site";

type FormState = Record<string, string>;

function Field({ label, name, type = "text", required = true, value, onChange }: { label: string; name: string; type?: string; required?: boolean; value: string; onChange: (name: string, value: string) => void }) {
  return <label className="field"><span>{label}</span><input name={name} type={type} required={required} value={value} onChange={(event) => onChange(name, event.target.value)} /></label>;
}

export function EnquiryForm({ appointment = false }: { appointment?: boolean }) {
  const initial = appointment ? { name: "", phone: "", date: "", time: "", service: "", message: "" } : { name: "", phone: "", service: "", location: "", date: "", message: "" };
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState("");
  const [delivery, setDelivery] = useState<{ message: string; url: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const update = (name: string, value: string) => setForm((current) => ({ ...current, [name]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.entries(form).some(([key, value]) => key !== "message" && !value.trim())) { setError("Please complete every required field."); return; }
    setError(""); setCopied(false);
    const lines = appointment
      ? ["Hello Tricure Engineering Limited, I would like to request an appointment.", `Name: ${form.name}`, `Phone: ${form.phone}`, `Preferred date: ${form.date}`, `Preferred time: ${form.time}`, `Service or project type: ${form.service}`, `Additional message: ${form.message || "None"}`]
      : ["Hello Tricure Engineering Limited, I would like to make a service enquiry.", `Full name: ${form.name}`, `Phone: ${form.phone}`, `Service required: ${form.service}`, `Project location: ${form.location}`, `Preferred date: ${form.date}`, `Message: ${form.message || "None"}`];
    const message = lines.join("\n");
    const url = whatsappUrl(message);
    setDelivery({ message, url });
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const copyMessage = async () => {
    if (!delivery) return;
    await navigator.clipboard.writeText(delivery.message);
    setCopied(true);
  };
  return (
    <form className="enquiry-form" onSubmit={submit} noValidate>
      <div className="form-heading"><div><span className="eyebrow">{appointment ? "Appointment request" : "Service enquiry"}</span><h2>{appointment ? "Choose a preferred time" : "Tell us about your requirement"}</h2></div>{appointment ? <CalendarDays /> : <MessageCircle />}</div>
      <div className="form-grid">
        <Field label={appointment ? "Name" : "Full Name"} name="name" value={form.name} onChange={update} />
        <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={update} />
        <label className="field"><span>{appointment ? "Service or Project Type" : "Service Required"}</span><select required value={form.service} onChange={(event) => update("service", event.target.value)}><option value="">Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
        {!appointment && <Field label="Project Location" name="location" value={form.location} onChange={update} />}
        <Field label="Preferred Date" name="date" type="date" value={form.date} onChange={update} />
        {appointment && <Field label="Preferred Time" name="time" type="time" value={form.time} onChange={update} />}
        <label className="field full"><span>{appointment ? "Additional Message" : "Message"}</span><textarea rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} /></label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="form-note">Your details will open in WhatsApp for you to review and send to 08052367684. An appointment remains a request until Tricure responds.</p>
      <Button type="submit" size="lg">{appointment ? "Send Appointment Request" : "Submit Enquiry"}</Button>
      {delivery && <div className="delivery-fallback" role="status"><h3>Your enquiry is ready</h3><p>If WhatsApp did not open, use the button below or copy the complete message.</p><div><Button asChild><a href={delivery.url} target="_blank" rel="noreferrer"><ExternalLink /> Open WhatsApp</a></Button><Button type="button" variant="outline" onClick={copyMessage}><Copy /> {copied ? "Copied" : "Copy Message"}</Button></div></div>}
    </form>
  );
}