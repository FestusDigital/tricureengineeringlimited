import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/contact-cta";
import { Gallery } from "@/components/gallery";
import { company, metaFor, photos, process, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => metaFor("Tricure Engineering Limited | Borehole Drilling & Water Solutions in Lagos", "Tricure Engineering Limited provides borehole drilling and water engineering solutions in Agege, Lagos. Contact us for drilling, borehole construction, pump installation and related services.", "/"),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero">
        <img src={photos.hero} alt="Aerial view of a major drilling operation" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <span className="eyebrow light">Engineering. Water. Precision.</span>
          <h1>Reliable Borehole Drilling &amp; Water Solutions in Lagos</h1>
          <p>Professional drilling and water engineering solutions tailored to residential, commercial and project specific requirements.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><Link to="/contact" search={{ form: "service" }}>Request a Service <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="secondary"><a href={company.phone}><Phone /> Call {company.phoneDisplay}</a></Button>
            <Button asChild size="lg" variant="outline"><a href={company.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
          </div>
        </div>
      </section>
      <section className="service-strip"><div className="shell strip-grid">{["Borehole Drilling", "Water Engineering", "Pump Systems", "Maintenance"].map((item) => <div key={item}><Check /> <span>{item}</span></div>)}</div></section>
      <section className="section"><div className="shell editorial-grid">
        <div className="image-stack"><img src={photos.engineer} alt="Field engineer reviewing technical information" loading="lazy" /><img src={photos.fieldteam} alt="Engineering crew working together on site" loading="lazy" /></div>
        <div className="copy-block"><span className="eyebrow">About Tricure</span><h2>Practical engineering built around the requirement</h2><p>Tricure Engineering Limited provides drilling and water engineering services from Agege, Lagos. Each enquiry begins with the project need, the available site information and a clear conversation about the work required.</p><p>The focus is on practical planning, professional communication and an approach suited to the specific residential, commercial or project context.</p><Button asChild variant="outline"><Link to="/about">Learn About Tricure <ArrowRight /></Link></Button></div>
      </div></section>
      <section className="section services-feature"><div className="shell"><div className="section-heading"><span className="eyebrow">Services</span><h2>Drilling and water engineering support</h2><p>Explore the proposed service areas and contact Tricure to discuss the exact requirement.</p></div><div className="service-grid">{services.slice(0, 6).map((service, index) => <article className={index === 0 ? "service-card featured" : "service-card"} key={service.title}><img src={service.image} alt={`Real engineering photography illustrating ${service.title}`} loading="lazy" /><div><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><Link to="/services" hash={service.title.toLowerCase().replaceAll(" ", "_")}>View service <ArrowRight /></Link></div></article>)}</div><div className="center-action"><Button asChild size="lg"><Link to="/services">View All Services</Link></Button></div></div></section>
      <section className="section process-preview"><div className="shell"><div className="section-heading left"><span className="eyebrow light">Our Process</span><h2>A clear path from enquiry to follow up</h2></div><ol className="process-list">{process.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><Button asChild variant="secondary"><Link to="/process">Understand the Process <ArrowRight /></Link></Button></div></section>
      <section className="section"><div className="shell"><div className="section-heading"><span className="eyebrow">Visual Reference</span><h2>Engineering in the field</h2><p>Representative real photography showing the type of environments, equipment and work connected with drilling and water engineering. These images are illustrative and are not presented as Tricure projects.</p></div><Gallery limit={5} /><div className="center-action"><Button asChild variant="outline"><Link to="/projects">Open the Gallery</Link></Button></div></div></section>
      <section className="section why"><div className="shell why-grid"><div><span className="eyebrow">Why contact Tricure</span><h2>A focused approach to real project needs</h2></div><div className="reason-list">{["Engineering focused approach", "Site specific solutions", "Professional communication", "Practical project planning", "Responsive enquiry process"].map((reason) => <div key={reason}><Check /><span>{reason}</span></div>)}</div></div></section>
      <ContactCta />
    </>
  );
}
