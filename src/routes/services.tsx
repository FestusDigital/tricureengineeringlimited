import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { metaFor, photos, services } from "@/lib/site";

export const Route = createFileRoute("/services")({ head: () => metaFor("Electrical, Water and Metal Works | Tricure Engineering Limited", "Explore the Electrical, Water and Metal Works divisions of Tricure Engineering Limited in Lagos.", "/services"), component: ServicesPage });

function ServicesPage() { return <><PageIntro eyebrow="Our Divisions" title="Electrical, Water and Metal Works" text="Three core engineering areas brought together within Tricure Engineering Limited." image={photos.plans} alt="Engineering plans being reviewed in a technical work environment" />
  <section className="section"><div className="shell service-rows">{services.map((service, index) => <article id={service.title.toLowerCase().replaceAll(" ", "_")} key={service.title} className="service-row"><img src={service.image} alt={`Real engineering photography representing ${service.title}`} loading={index > 0 ? "lazy" : "eager"} /><div><span className="service-number">0{index + 1}</span><h2>{service.title}</h2><p>{service.description}</p><p>Contact Tricure with details of your project or requirement so the next appropriate step can be discussed. Specific services can be confirmed during that conversation.</p><Button asChild variant="outline"><Link to="/contact" search={{ form: "service" }}>Enquire About This Division <ArrowRight /></Link></Button></div></article>)}</div></section><ContactCta /></>; }