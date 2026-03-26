import { Link } from "react-router-dom";
import { company, navLinks, services } from "../data/siteData";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="container-mnm grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold">{company.shortName}</h3>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            Professional facility management, staffing, office support, and workplace
            operations services for Hyderabad businesses.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Pages</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Core Services</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            {services.slice(0, 5).map((service) => (
              <div key={service.title}>{service.title}</div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="mt-4 space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>{company.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>{company.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>{company.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-mnm flex flex-col justify-between gap-3 py-5 text-sm text-gray-400 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>GSTIN: {company.gstin}</span>
        </div>
      </div>
    </footer>
  );
}
