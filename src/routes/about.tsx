import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { metaFor, photos } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => metaFor("About Tricure Engineering Limited | Engineering Company in Lagos", "Learn about Tricure Engineering Limited and its practical approach across Electrical, Water and Metal Works in Lagos.", "/about"),
  component: AboutPage,
});

function AboutPage() {
  return <><PageIntro eyebrow="About Tricure" title="Engineering attention across three essential areas" text="Tricure Engineering Limited works with clients across Electrical, Water and Metal Works to understand the requirement and develop a practical path forward." image={photos.engineer} alt="Engineer reviewing technical information in the field" />
    <section className="section"><div className="shell editorial-grid"><div className="copy-block"><span className="eyebrow">Our Approach</span><h2>Practical decisions begin with the project context</h2><p>Electrical, water and metal work requirements can vary from one project to another. Tricure approaches each enquiry by considering the stated requirement, available information and the work needed to move forward.</p><p>Clear communication helps keep the client informed as the requirement is assessed, planned and carried out. The objective is a professional and workable response rather than a one size fits all recommendation.</p><Button asChild><Link to="/contact" search={{ form: "service" }}>Discuss Your Requirement</Link></Button></div><img className="single-editorial-image" src={photos.plans} alt="Technical professional reviewing engineering plans" loading="lazy" /></div></section>
    <section className="section values"><div className="shell"><div className="section-heading left"><span className="eyebrow">What guides the work</span><h2>Clear, grounded and project aware</h2></div><div className="value-grid">{[["01","Electrical","Broad electrical engineering solutions discussed around the stated requirement."],["02","Water","Water engineering that includes the confirmed borehole and pump service areas."],["03","Metal Works","Broad metal works and fabrication solutions shaped around the stated requirement."],["04","Communication","Clients have a direct contact route for enquiries and project conversations."]].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="shell image-copy"><img src={photos.nigeria} alt="Construction professional working at a Nigerian site" loading="lazy" /><div><span className="eyebrow">Based in Lagos</span><h2>Available for project conversations from Agege</h2><p>Tricure Engineering Limited is located at Raji St, Agege, Lagos 102212, Lagos, Nigeria. Contact the team directly to discuss your requirement and whether the proposed service is suitable.</p><ul className="check-list">{["Direct phone contact", "WhatsApp enquiry option", "Google Maps directions", "Service request forms"].map((item) => <li key={item}><Check />{item}</li>)}</ul></div></div></section><ContactCta /></>;
}