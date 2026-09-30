import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/tricure-logo.png";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Our Process" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="topline">
        <div className="shell topline-inner">
          <span>Engineering and drilling services in Lagos</span>
          <a href={company.phone}><Phone aria-hidden="true" /> {company.phoneDisplay}</a>
        </div>
      </div>
      <div className="shell nav-row">
        <Link to="/" className="brand" aria-label="Tricure Engineering Limited home">
          <img src={logo} alt="Tricure Engineering Limited" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="desktop-cta"><Link to="/contact" search={{ form: "service" }}>Request a Service</Link></Button>
        <Button variant="ghost" size="icon" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell">
            {links.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            <Button asChild className="w-full"><Link to="/contact" search={{ form: "service" }}>Request a Service</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}