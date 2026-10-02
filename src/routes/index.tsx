import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/contact-cta";
import { Gallery } from "@/components/gallery";
import { company, metaFor, photos, process, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => metaFor("Tricure Engineering Limited | Electrical, Water and Metal Works", "Tricure Engineering Limited provides electrical, water and metal works engineering solutions from Agege, Lagos.", "/"),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero">
        <img src={photos.fieldteam} alt="Engineering team working together in the field" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <span className="eyebrow light">Three core engineering divisions</span>
          <h1>Electrical. Water. Metal Works.</h1>
          <p>Tricure Engineering Limited provides practical engineering solutions across three essential areas for residential, commercial and project specific requirements.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><Link to="/contact" search={{ form: "service" }}>Request a Service <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="secondary"><a href={company.phone}><Phone /> Call {company.phoneDisplay}</a></Button>
            <Button asChild size="lg" variant="outline"><a href={company.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
          </div>
        </div>
      </section>
      <section className="service-strip"><div className="shell strip-grid core-strip">{["Electrical", "Water", "Metal Works"].map((item) => <div key={item}><Check /> <span>{item}</span></div>)}</div></section>
      <section className="section"><div className="shell editorial-grid">
        <div className="image-stack"><img src={photos.engineer} alt="Field engineer reviewing technical information" loading="lazy" /><img src={photos.fieldteam} alt="Engineering crew working together on site" loading="lazy" /></div>
        <div className="copy-block"><span className="eyebrow">About Tricure</span><h2>One engineering company with three essential areas</h2><p>Tricure Engineering Limited operates across Electrical, Water and Metal Works from Agege, Lagos. Each enquiry begins with the project need, the available information and a clear conversation about the work required.</p><p>The focus is on practical planning, professional communication and an approach suited to the specific residential, commercial or project context.</p><Button asChild variant="outline"><Link to="/about">Learn About Tricure <ArrowRight /></Link></Button></div>
      </div></section>
      <section className="section services-feature"><div className="shell"><div className="section-heading"><span className="eyebrow">Core Divisions</span><h2>Three essential engineering areas</h2><p>Electrical, Water and Metal Works have equal importance within Tricure Engineering Limited.</p></div><div className="service-grid division-grid">{services.map((service, index) => <article className="service-card" key={service.title}><img src={service.image} alt={`Real engineering photography representing ${service.title}`} loading="lazy" /><div><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><Link to="/services" hash={service.title.toLowerCase().replaceAll(" ", "_")}>Explore division <ArrowRight /></Link></div></article>)}</div><div className="center-action"><Button asChild size="lg"><Link to="/services">Explore All Divisions</Link></Button></div></div></section>
      <section className="section process-preview"><div className="shell"><div className="section-heading left"><span className="eyebrow light">Our Process</span><h2>A clear path from enquiry to follow up</h2></div><ol className="process-list">{process.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><Button asChild variant="secondary"><Link to="/process">Understand the Process <ArrowRight /></Link></Button></div></section>
      <section className="section"><div className="shell"><div className="section-heading"><span className="eyebrow">Visual Reference</span><h2>Engineering across three divisions</h2><p>Representative real photography showing electrical, water, metal work and wider engineering environments. These images are illustrative and are not presented as Tricure projects.</p></div><Gallery limit={6} /><div className="center-action"><Button asChild variant="outline"><Link to="/projects">Open the Gallery</Link></Button></div></div></section>
      <section className="section why"><div className="shell why-grid"><div><span className="eyebrow">Why contact Tricure</span><h2>A focused approach to real project needs</h2></div><div className="reason-list">{["Engineering focused approach", "Site specific solutions", "Professional communication", "Practical project planning", "Responsive enquiry process"].map((reason) => <div key={reason}><Check /><span>{reason}</span></div>)}</div></div></section>
      <ContactCta />
    </>
  );
}
