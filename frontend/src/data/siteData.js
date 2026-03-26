import { Building2, Brush, BriefcaseBusiness, Users, Hammer, Cpu, ShieldCheck, ClipboardList, Factory, Landmark, House, Building } from "lucide-react";

export const company = {
  name: "MNM Facilitech Private Limited",
  shortName: "MNM Facilitech",
  gstin: "36AATCM3620J1Z5",
  registeredDate: "26/06/2025",
  type: "Private Limited Company",
  status: "Active",
  phone: "+91 7672052402",
  email: "business@mnmfacilitech.com",
  address: "SBRS CV Towers, Flat No 203, 2nd Floor, HITEC City Main Road, Hyderabad, Telangana - 500081",
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
  { name: "Careers", path: "/careers" },
];

export const stats = [
  { label: "Sites Managed", value: 50, suffix: "+" },
  { label: "Client Retention", value: 95, suffix: "%" },
  { label: "Faster Onboarding", value: 3, suffix: "X" },
  { label: "Payroll Accuracy", value: 99, suffix: "%" },
];

export const services = {
  title: "Our Services",
  subtitle: "Comprehensive solutions tailored to meet your business needs.",
  items: [
    {
      title: "Facility Management",
      description: "Complete office facility management, preventive maintenance coordination, workplace upkeep, safety support, and asset-linked operational planning.",
      icon: Building2,
    },
    {
      title: "Housekeeping & Office Cleaning",
      description: "Daily cleaning, deep cleaning, sanitization, disinfection, washroom care, common area upkeep, and hygiene-driven support for modern workplaces.",
      icon: Brush,
    },
    {
      title: "Corporate Office Support",
      description: "Reception services, administrative support, helpdesk coordination, vendor follow-up, employee assistance, and front-office operations.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Contract Staff Management",
      description: "Deployment of trained support staff, attendance management, payroll coordination, onboarding support, and workforce continuity across sites.",
      icon: Users,
    },
    {
      title: "Greenfield Office Setup",
      description: "End-to-end setup of new office spaces including planning, vendor alignment, support staffing, basic operational readiness, and launch coordination.",
      icon: Hammer,
    },
    {
      title: "Smart Operations Support",
      description: "Process-driven execution with attendance tracking, payroll workflows, compliance support, and operational reporting for growing businesses.",
      icon: Cpu,
    },
  ],
};

export const impactAreas = [
  "End-to-end payroll automation",
  "Contract staff attendance tracking",
  "Greenfield office setup in Hyderabad",
  "Full facility lifecycle management",
  "Smart building operations",
  "Compliance and statutory filing",
];

export const industries = [
  { title: "IT Companies & Tech Parks", description: "Reliable support services for fast-growing tech environments, innovation centers, and shared office ecosystems in Hyderabad.", icon: Cpu },
  { title: "Corporate Offices", description: "Structured facility, front-office, and workforce support for enterprise teams that need polished daily operations.", icon: Building },
  { title: "Residential House Complexes", description: "Housekeeping, support staffing, security coordination, and service management for residential communities.", icon: House },
  { title: "SMBs", description: "Scalable office support, admin coordination, and facility services tailored for small and medium businesses.", icon: Landmark },
  { title: "Commercial Facilities", description: "Daily support for common areas, reception zones, service staff management, and vendor coordination.", icon: ClipboardList },
  { title: "Industrial & Support Sites", description: "Operational discipline, workforce allocation, attendance handling, and site support processes for active facilities.", icon: Factory },
];

export const testimonials = [
  { name: "Operations Manager", company: "Hyderabad Corporate Client", quote: "MNM Facilitech brought structure to our office support operations. Their staffing response was fast, and the daily coordination improved noticeably." },
  { name: "Admin Lead", company: "Tech Park Occupier", quote: "Their team understood the pressure of workplace hygiene, front-office discipline, and vendor follow-up. Execution was professional and dependable." },
  { name: "Facility Coordinator", company: "Commercial Office", quote: "The onboarding speed and payroll coordination made a real difference. We saw smoother staffing continuity and fewer operational gaps." },
];

export const careerOpenings = [
  { title: "Facility Executive", location: "Hyderabad", type: "Full Time" },
  { title: "Housekeeping Supervisor", location: "Hyderabad", type: "Full Time" },
  { title: "Front Office Executive", location: "Hyderabad", type: "Full Time" },
  { title: "Site Coordinator", location: "Hyderabad", type: "Full Time" },
];

export const highlights = [
  { title: "Compliance-Focused Operations", description: "We align workforce execution with attendance, payroll, and statutory support workflows." },
  { title: "Faster Mobilization", description: "Our processes help clients onboard support teams quickly and reduce delays during expansion." },
  { title: "Facilities Expertise", description: "We support daily office functionality through structured service delivery and responsive coordination." },
];

export const trustPoints = [
  "Active Private Limited Company",
  "GST Registered in Telangana",
  "Hyderabad-based operations",
  "Facilities and workforce support focus",
  "Scalable for multi-site client needs",
];

export const icons = { ShieldCheck };
