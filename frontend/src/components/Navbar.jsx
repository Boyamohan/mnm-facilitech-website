import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-lg font-bold text-white">
            M
          </div>
          <div>
            <div className="text-base font-bold text-brand-dark">
              {company.shortName}
            </div>
            <div className="text-xs text-gray-500">Facility & Workforce Solutions</div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navItemClass}
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href={`tel:${company.phone}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:underline"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <button
          className="rounded-xl border border-brand-border p-2 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-white lg:hidden">
          <div className="container-mnm flex flex-col gap-4 py-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navItemClass}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary">
              <Phone size={16} />
              {company.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
