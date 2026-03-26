import { company, navLinks, services } from "../data/siteData";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="container-mmm grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold">{company.shortName}</h3>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            Professional facility management, staffing, office support, and workplace operations services for Hyderabad businesses.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Pages</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Core Services</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            {services.slice(0, 5).map((service) => (
              <a
                key={service.id}
                href={`#service-${service.id}`}
                className="hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{company.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{company.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{company.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p className="mt-1">GSTIN: {company.gstin}</p>
      </div>
    </footer>
  );
}
