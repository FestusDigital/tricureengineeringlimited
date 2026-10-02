import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/contact-cta";
import { Gallery } from "@/components/gallery";
import { PageIntro } from "@/components/page-intro";
import { metaFor, photos } from "@/lib/site";

export const Route = createFileRoute("/projects")({ head: () => metaFor("Electrical, Water and Metal Works Gallery | Tricure", "View representative real photography connected with electrical, water, metal works and broader engineering environments.", "/projects"), component: ProjectsPage });

function ProjectsPage() { return <><PageIntro eyebrow="Projects and Gallery" title="A visual view across three engineering areas" text="Explore real photography representing Electrical, Water, Metal Works and broader engineering environments." image={photos.fieldteam} alt="Engineering team coordinating work on an outdoor site" />
  <section className="section"><div className="shell"><div className="gallery-note"><span className="eyebrow">Image notice</span><h2>Representative photography</h2><p>These licensed images provide useful visual context for service categories and engineering environments. They are not presented as completed Tricure projects, named clients or specific project locations.</p></div><Gallery /></div></section><ContactCta /></>; }