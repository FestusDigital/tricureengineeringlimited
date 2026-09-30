import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/tricure-logo.png";
import { company, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Tricure Engineering Limited" />
          <p>Practical drilling and water engineering solutions for residential, commercial and project specific requirements.</p>
        </div>
        <div>
          <h2>Navigate</h2>
          <Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/process">Our Process</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link>
        </div>
        <div>
          <h2>Services</h2>
          {services.slice(0, 5).map((service) => <Link key={service.title} to="/services" hash={service.title.toLowerCase().replaceAll(" ", "_")}>{service.title}</Link>)}
        </div>
        <div>
          <h2>Contact</h2>
          <a href={company.phone}><Phone aria-hidden="true" /> {company.phoneDisplay}</a>
          <a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={company.maps} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> {company.address}</a>
          <a href={company.maps} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
      </div>
      <div className="shell footer-base"><p>© {new Date().getFullYear()} Tricure Engineering Limited. All rights reserved.</p></div>
    </footer>
  );
}