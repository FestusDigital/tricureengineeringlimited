import { useState, type FormEvent } from "react";
import { Bot, Copy, LoaderCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { recommendServices } from "@/lib/service-adviser.functions";
import { whatsappUrl } from "@/lib/site";

const initialForm = { site: "", waterNeeds: "", constraints: "" };

export function ServiceAdviser() {
  const [form, setForm] = useState(initialForm);
  const [recommendation, setRecommendation] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const enquiry = recommendation
    ? `Hello Tricure Engineering Limited, I used your service adviser and would like to discuss my requirement.\n\nSite and location details: ${form.site}\nWater needs: ${form.waterNeeds}\nProject constraints: ${form.constraints}\n\nService adviser recommendation: ${recommendation}`
    : "";

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setRecommendation("");
    setCopied(false);
    setLoading(true);
    try {
      const result = await recommendServices({ data: form });
      setRecommendation(result);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The adviser could not complete this request.");
    } finally {
      setLoading(false);
    }
  }

  async function copyEnquiry() {
    await navigator.clipboard.writeText(enquiry);
    setCopied(true);
  }

  return (
    <section className="section adviser-section" aria-labelledby="service-adviser-title">
      <div className="shell adviser-layout">
        <div className="adviser-intro">
          <span className="eyebrow light">Service adviser</span>
          <h2 id="service-adviser-title">Describe your water project</h2>
          <p>Share what you know about the site, the water requirement and any access or timing constraints. The adviser will suggest relevant Tricure services and prepare a WhatsApp enquiry.</p>
          <p className="adviser-caution">This is an initial guide, not a site assessment or technical guarantee.</p>
        </div>
        <form className="adviser-form" onSubmit={submit}>
          <label className="field">
            <span>Site and location details</span>
            <textarea required minLength={10} maxLength={1200} rows={4} placeholder="For example, the area in Lagos, property type, available space and site access" value={form.site} onChange={(event) => setForm({ ...form, site: event.target.value })} />
          </label>
          <label className="field">
            <span>Water needs</span>
            <textarea required minLength={10} maxLength={1200} rows={4} placeholder="Describe who will use the water and the current water situation" value={form.waterNeeds} onChange={(event) => setForm({ ...form, waterNeeds: event.target.value })} />
          </label>
          <label className="field">
            <span>Project constraints</span>
            <textarea required minLength={3} maxLength={1200} rows={3} placeholder="Mention access, preferred timing, an existing borehole, pump issues or other limitations" value={form.constraints} onChange={(event) => setForm({ ...form, constraints: event.target.value })} />
          </label>
          <Button type="submit" size="lg" disabled={loading}>{loading ? <><LoaderCircle className="adviser-spinner" /> Preparing recommendation</> : <><Bot /> Recommend Services</>}</Button>
          {error && <Alert variant="destructive"><AlertTitle>Recommendation unavailable</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
          {recommendation && (
            <div className="adviser-result" aria-live="polite">
              <span className="eyebrow">Suggested next step</span>
              <p>{recommendation}</p>
              <div className="adviser-actions">
                <Button asChild size="lg"><a href={whatsappUrl(enquiry)} target="_blank" rel="noreferrer"><MessageCircle /> Send Tailored Enquiry</a></Button>
                <Button type="button" variant="outline" onClick={copyEnquiry}><Copy /> {copied ? "Copied" : "Copy Enquiry"}</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}