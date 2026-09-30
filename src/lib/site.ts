import hero from "@/assets/photos/hero.jpg.asset.json";
import engineer from "@/assets/photos/engineer.jpg.asset.json";
import fieldteam from "@/assets/photos/fieldteam.jpg.asset.json";
import treatment from "@/assets/photos/treatment.jpg.asset.json";
import canal from "@/assets/photos/canal.jpg.asset.json";
import metal from "@/assets/photos/metal.jpg.asset.json";
import nigeria from "@/assets/photos/nigeria.jpg.asset.json";
import plans from "@/assets/photos/plans.jpg.asset.json";
import water from "@/assets/photos/water.jpg.asset.json";
import watertap from "@/assets/photos/watertap.jpg.asset.json";
import well from "@/assets/photos/well.jpg.asset.json";
import workers from "@/assets/photos/workers.jpg.asset.json";

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
  hero: hero.url,
  engineer: engineer.url,
  fieldteam: fieldteam.url,
  treatment: treatment.url,
  canal: canal.url,
  metal: metal.url,
  nigeria: nigeria.url,
  plans: plans.url,
  water: water.url,
  watertap: watertap.url,
  well: well.url,
  workers: workers.url,
};

export const services = [
  { title: "Borehole Drilling", image: photos.hero, description: "Drilling work planned around the site, access conditions and the requirements discussed with the client." },
  { title: "Hydrogeological and Site Survey", image: photos.engineer, description: "Site information gathering to support practical decisions before drilling work begins." },
  { title: "Borehole Construction", image: photos.canal, description: "A coordinated approach to borehole construction, from planning through the required site work." },
  { title: "Borehole Pump Installation", image: photos.metal, description: "Pump installation considered in relation to the borehole and the intended water system." },
  { title: "Borehole Rehabilitation", image: photos.workers, description: "Assessment and practical work for existing boreholes that require attention or improvement." },
  { title: "Borehole Maintenance", image: photos.fieldteam, description: "Planned maintenance support for boreholes, pumps and related system components." },
  { title: "Water System Solutions", image: photos.treatment, description: "Water engineering support for residential, commercial and project specific requirements." },
];

export const process = [
  { number: "01", title: "Enquiry", text: "Contact Tricure and share the service or project requirement." },
  { number: "02", title: "Site or Requirement Assessment", text: "Relevant site details and project information are gathered." },
  { number: "03", title: "Technical Planning", text: "An appropriate approach is considered based on the available project information." },
  { number: "04", title: "Execution", text: "The required engineering or drilling work is carried out." },
  { number: "05", title: "Completion and Follow Up", text: "The completed work is reviewed and relevant follow up is provided." },
];

export const gallery = [
  { src: photos.hero, title: "Drilling Operations", alt: "Aerial view of large scale drilling work and site equipment" },
  { src: photos.engineer, title: "Site Assessment", alt: "Field engineer reviewing technical information outdoors" },
  { src: photos.fieldteam, title: "Field Engineering", alt: "Engineering crew working together on a construction site" },
  { src: photos.treatment, title: "Water Engineering", alt: "Aerial view of water treatment infrastructure" },
  { src: photos.canal, title: "Site Work", alt: "Construction team working around water infrastructure" },
  { src: photos.metal, title: "Engineering Equipment", alt: "Precision metal drilling in an engineering workshop" },
  { src: photos.plans, title: "Technical Planning", alt: "Technical professional reviewing plans at a desk" },
  { src: photos.workers, title: "Project Coordination", alt: "Construction team coordinating work on site" },
  { src: photos.well, title: "Groundwater Access", alt: "Water well in a rural landscape" },
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