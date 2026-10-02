import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { metaFor, photos, process } from "@/lib/site";

export const Route = createFileRoute("/process")({ head: () => metaFor("Our Engineering Process | Tricure Engineering Limited", "See the enquiry, assessment, planning, execution and follow up process used across Tricure engineering requests.", "/process"), component: ProcessPage });

function ProcessPage() { return <><PageIntro eyebrow="Our Process" title="A considered route from first conversation to completion" text="The exact steps can change across Electrical, Water and Metal Works, but every request begins with understanding the requirement." image={photos.plans} alt="Technical planning documents and engineering work" />
  <section className="section"><div className="shell process-page"><div className="process-statement"><span className="eyebrow">How work begins</span><h2>Start with the information you have</h2><p>You do not need to have every technical detail before contacting Tricure. Share the service you are considering, the project location and any available site information.</p><Button asChild><Link to="/contact" search={{ form: "service" }}>Start an Enquiry <ArrowRight /></Link></Button></div><ol>{process.map((step) => <li key={step.number}><span>{step.number}</span><div><h2>{step.title}</h2><p>{step.text}</p>{step.number === "02" && <p>Where relevant, access, intended use and known site conditions can form part of the conversation.</p>}{step.number === "03" && <p>Technical planning depends on the information available and the agreed scope.</p>}</div></li>)}</ol></div></section><ContactCta /></>; }