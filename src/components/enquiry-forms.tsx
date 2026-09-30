import { useState, type FormEvent } from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
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
  const update = (name: string, value: string) => setForm((current) => ({ ...current, [name]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.entries(form).some(([key, value]) => key !== "message" && !value.trim())) { setError("Please complete every required field."); return; }
    setError("");
    const lines = appointment
      ? ["Hello Tricure Engineering Limited, I would like to request an appointment.", `Name: ${form.name}`, `Phone: ${form.phone}`, `Preferred date: ${form.date}`, `Preferred time: ${form.time}`, `Service or project type: ${form.service}`, `Additional message: ${form.message || "None"}`]
      : ["Hello Tricure Engineering Limited, I would like to make a service enquiry.", `Full name: ${form.name}`, `Phone: ${form.phone}`, `Service required: ${form.service}`, `Project location: ${form.location}`, `Preferred date: ${form.date}`, `Message: ${form.message || "None"}`];
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
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
      <p className="form-note">Your details will open in WhatsApp for you to review and send. An appointment remains a request until Tricure responds.</p>
      <Button type="submit" size="lg">{appointment ? "Send Appointment Request" : "Submit Enquiry"}</Button>
    </form>
  );
}