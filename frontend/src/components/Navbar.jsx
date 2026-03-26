31
31
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company, navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-brand-primary" : "text-brand-dark hover:text-brand-primary"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-border bg-white/95 backdrop-blur-md">
      <div className="container-mnm flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-lg font-bold text-white">
            M
          </div>
          <div>
            <div className="text-base font-bold text-brand-dark">
              {company.shortName}
            </div>
            <div className="text-xs text-gray-500">Facility & Workforce Solutions</div>
          </div>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-sm font-medium transition text-brand-dark hover:text-brand-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+917672052402" className="hidden items-center gap-2 lg:flex text-sm font-medium text-brand-dark hover:text-brand-primary">
            <Phone className="w-4 h-4" />
            +91 76720 52402
          </a>
          <a
            href="mailto:business@mnmfacilitech.com"
            className="hidden rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition lg:block"
          >
            Contact Us
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-brand-dark"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="flex flex-col py-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="px-6 py-3 text-sm font-medium text-brand-dark hover:bg-gray-50 transition"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-brand-border mt-2 pt-2">
              <a
                href="tel:+917672052402"
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-dark"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="mailto:business@mnmfacilitech.com"
                className="block px-6 py-3 text-sm font-semibold text-brand-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
