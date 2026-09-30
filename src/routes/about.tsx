import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { metaFor, photos } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => metaFor("About Tricure Engineering Limited | Lagos", "Learn about Tricure Engineering Limited and our practical approach to drilling, water solutions, technical planning and customer communication in Lagos.", "/about"),
  component: AboutPage,
});

function AboutPage() {
  return <><PageIntro eyebrow="About Tricure" title="Engineering attention for site specific needs" text="Tricure Engineering Limited works with clients to understand drilling and water requirements and develop a practical path forward." image={photos.engineer} alt="Engineer reviewing technical information in the field" />
    <section className="section"><div className="shell editorial-grid"><div className="copy-block"><span className="eyebrow">Our Approach</span><h2>Practical decisions begin with the project context</h2><p>Drilling and water engineering needs can vary from one site to another. Tricure approaches each enquiry by considering the stated requirement, available site information and the work needed to move forward.</p><p>Clear communication helps keep the client informed as the requirement is assessed, planned and carried out. The objective is a professional and workable response rather than a one size fits all recommendation.</p><Button asChild><Link to="/contact" search={{ form: "service" }}>Discuss Your Requirement</Link></Button></div><img className="single-editorial-image" src={photos.plans} alt="Technical professional reviewing engineering plans" loading="lazy" /></div></section>
    <section className="section values"><div className="shell"><div className="section-heading left"><span className="eyebrow">What guides the work</span><h2>Clear, grounded and project aware</h2></div><div className="value-grid">{[["01","Requirement First","The conversation starts with what the client needs and what is known about the site."],["02","Practical Planning","The proposed approach is considered in relation to the specific work required."],["03","Customer Communication","Clients have a clear contact route for enquiries and project conversations."],["04","Engineering Focus","Attention remains on drilling, water systems and related engineering requirements."]].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="shell image-copy"><img src={photos.nigeria} alt="Construction professional working at a Nigerian site" loading="lazy" /><div><span className="eyebrow">Based in Lagos</span><h2>Available for project conversations from Agege</h2><p>Tricure Engineering Limited is located at Raji St, Agege, Lagos 102212, Lagos, Nigeria. Contact the team directly to discuss your requirement and whether the proposed service is suitable.</p><ul className="check-list">{["Direct phone contact", "WhatsApp enquiry option", "Google Maps directions", "Service request forms"].map((item) => <li key={item}><Check />{item}</li>)}</ul></div></div></section><ContactCta /></>;
}