import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-forms";
import { ServiceAdviser } from "@/components/service-adviser";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { company, metaFor, photos } from "@/lib/site";

export const Route = createFileRoute("/contact")({ validateSearch: (search: Record<string, unknown>) => ({ form: search["form"] === "appointment" ? "appointment" as const : "service" as const }), head: () => metaFor("Contact Tricure Engineering Limited | Agege, Lagos", "Call or WhatsApp Tricure Engineering Limited at 08052367684 for Electrical, Water and Metal Works enquiries in Lagos.", "/contact"), component: ContactPage });

function ContactPage() { const { form } = Route.useSearch(); return <><PageIntro eyebrow="Contact" title="Discuss your engineering requirement" text="Contact Tricure about Electrical, Water, Metal Works or another engineering enquiry." image={photos.engineer} alt="Engineer reviewing technical information in the field" />
  <ServiceAdviser />
  <section className="section contact-section"><div className="shell contact-grid"><aside><span className="eyebrow">Direct contact</span><h2>Tricure Engineering Limited</h2><div className="contact-method"><Phone /><div><span>Phone</span><a href={company.phone}>{company.phoneDisplay}</a></div></div><div className="contact-method"><MessageCircle /><div><span>WhatsApp</span><a href={company.whatsapp} target="_blank" rel="noreferrer">Start a conversation</a></div></div><div className="contact-method"><MapPin /><div><span>Location</span><p>{company.address}</p><a href={company.maps} target="_blank" rel="noreferrer">View on Google Maps</a></div></div><Button asChild variant="outline"><a href={company.maps} target="_blank" rel="noreferrer">Get Directions</a></Button><div className="appointment-switch"><h3>Prefer an appointment request?</h3><p>Choose a preferred date and time for a conversation.</p><Button asChild variant="secondary"><a href="/contact?form=appointment">Book Appointment</a></Button></div></aside><EnquiryForm appointment={form === "appointment"} /></div></section></>; }