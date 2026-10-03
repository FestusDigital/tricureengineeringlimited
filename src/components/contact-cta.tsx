import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="cta-band">
      <div className="shell cta-inner">
        <div><span className="eyebrow light">Start a conversation</span><h2>Planning an engineering project?</h2><p>Talk to Tricure about your Electrical, Water or Metal Works requirement.</p></div>
        <div className="cta-actions">
          <Button asChild size="lg"><Link to="/contact" search={{ form: "service" }}>Request a Service</Link></Button>
          <Button asChild size="lg" variant="secondary"><a href={company.phone}><Phone /> Call Now</a></Button>
          <Button asChild size="lg" variant="outline"><a href={company.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
        </div>
      </div>
    </section>
  );
}