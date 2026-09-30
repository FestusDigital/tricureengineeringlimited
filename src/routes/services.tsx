import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { metaFor, photos, services } from "@/lib/site";

export const Route = createFileRoute("/services")({ head: () => metaFor("Borehole Drilling and Water Engineering Services | Tricure", "Explore borehole drilling, site survey, borehole construction, pump installation, rehabilitation, maintenance and water system services in Lagos.", "/services"), component: ServicesPage });

function ServicesPage() { return <><PageIntro eyebrow="Our Services" title="Drilling and water solutions for real project requirements" text="From early site conversations through borehole and water system work, Tricure provides practical engineering support." image={photos.treatment} alt="Large water engineering and treatment infrastructure" />
  <section className="section"><div className="shell service-rows">{services.map((service, index) => <article id={service.title.toLowerCase().replaceAll(" ", "_")} key={service.title} className="service-row"><img src={service.image} alt={`Real engineering photography illustrating ${service.title}`} loading={index > 1 ? "lazy" : "eager"} /><div><span className="service-number">0{index + 1}</span><h2>{service.title}</h2><p>{service.description}</p><p>Contact Tricure with details of your site or requirement so the next appropriate step can be discussed.</p><Button asChild variant="outline"><Link to="/contact" search={{ form: "service" }}>Enquire About This Service <ArrowRight /></Link></Button></div></article>)}</div></section><ContactCta /></>; }