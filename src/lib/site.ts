import hero from "@/assets/photos/hero.jpg";
import engineer from "@/assets/photos/engineer.jpg";
import fieldteam from "@/assets/photos/fieldteam.jpg";
import treatment from "@/assets/photos/treatment.jpg";
import canal from "@/assets/photos/canal.jpg";
import metal from "@/assets/photos/metal.jpg";
import nigeria from "@/assets/photos/nigeria.jpg";
import plans from "@/assets/photos/plans.jpg";
import water from "@/assets/photos/water.jpg";
import watertap from "@/assets/photos/watertap.jpg";
import well from "@/assets/photos/well.jpg";
import workers from "@/assets/photos/workers.jpg";

export const company = {
  name: "Tricure Engineering Limited",
  phoneDisplay: "08052367684",
  phone: "tel:+2348052367684",
  whatsapp: "https://wa.me/2348052367684?text=Hello%20Tricure%20Engineering%20Limited%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20services.",
  whatsappBase: "https://wa.me/2348052367684",
  maps: "https://maps.app.goo.gl/35J6euJLfmAPojTT6",
  address: "Raji St, Agege, Lagos 102212, Lagos, Nigeria",
};

export const photos = {
  hero,
  engineer,
  fieldteam,
  treatment,
  canal,
  metal,
  nigeria,
  plans,
  water,
  watertap,
  well,
  workers,
};

export const services = [
  { title: "Electrical", image: photos.treatment, description: "Electrical engineering solutions, electrical systems, installation and related engineering services discussed around the stated requirement." },
  { title: "Water", image: photos.canal, description: "Water engineering that includes confirmed areas such as borehole drilling, borehole construction, pump systems, rehabilitation and maintenance." },
  { title: "Metal Works", image: photos.metal, description: "Metal works, fabrication and related engineering solutions considered in relation to the client's stated project requirement." },
];

export const process = [
  { number: "01", title: "Enquiry", text: "Contact Tricure and share the service or project requirement." },
  { number: "02", title: "Site or Requirement Assessment", text: "Relevant site details and project information are gathered." },
  { number: "03", title: "Technical Planning", text: "An appropriate approach is considered based on the available project information." },
  { number: "04", title: "Execution", text: "The required engineering work is carried out according to the agreed scope." },
  { number: "05", title: "Completion and Follow Up", text: "The completed work is reviewed and relevant follow up is provided." },
];

export const gallery = [
  { src: photos.treatment, title: "Electrical Systems", alt: "Electrical equipment installed within an engineering environment" },
  { src: photos.engineer, title: "Engineering Assessment", alt: "Field engineer reviewing technical information outdoors" },
  { src: photos.metal, title: "Metal Works", alt: "Metal drilling equipment operating in a fabrication workshop" },
  { src: photos.canal, title: "Water Engineering", alt: "Construction team working around water infrastructure" },
  { src: photos.plans, title: "Technical Planning", alt: "Technical professional reviewing plans at a desk" },
  { src: photos.fieldteam, title: "Engineering Operations", alt: "Engineering crew working together on an outdoor site" },
  { src: photos.water, title: "Water Systems", alt: "Water system equipment viewed from above" },
  { src: photos.hero, title: "Project Infrastructure", alt: "Large engineering infrastructure under construction" },
  { src: photos.watertap, title: "Water Access", alt: "People collecting water from an outdoor water point" },
];

export const whatsappUrl = (message: string) =>
  `${company.whatsappBase}?text=${encodeURIComponent(message)}`;

export const metaFor = (title: string, description: string, path: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});