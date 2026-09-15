export const COMPANY_CERTIFICATES = [
  {
    id: "iso-9001-2015",
    title: "ISO 9001:2015",
    label: "ISO",
    code: "9001:2015",
    description:
      "Quality Management System — Constructional and Engineering Contracting related to Technology Projects",
    file: "/certificates/ISO-9001-2015-Certificate.pdf",
  },
  {
    id: "iso-45001-2018",
    title: "ISO 45001:2018",
    label: "ISO",
    code: "45001:2018",
    description: "Occupational Health & Safety Management System",
    file: "/certificates/ISO-45001-2008-Certificate.pdf",
  },
  {
    id: "iso-14001",
    title: "ISO 14001",
    label: "ISO",
    code: "14001",
    description: "Environmental Management System",
    file: "",
  },
] as const;

export const COMPANY = {
  legalName: "Emirates Link General Contracting S.P LLC",
  shortName: "ELGC",
  name: "ELGC",
  tagline: "Engineered for Industry. Driven by Precision. Trusted to Deliver.",
  phone: ["+971 2 672 7226", "+971 58 968 8301"],
  email: ["admin@elgc.ae"],
  website: "www.elgc.ae",
  address:
    "Office 502, TESSCO Building, Opposite Royal Rose Hotel, Electra Street, Abu Dhabi, UAE",
  poBox: "P.O. Box 32799",
  city: "Abu Dhabi, UAE",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.8011049846073!2d54.37041457481487!3d24.492347359889738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67da826c390f%3A0xc39ea356d3b34b4b!2sEmirates%20Link%20General%20Contracting%20LLC%20-ELGC!5e0!3m2!1sen!2sin!4v1782037888573!5m2!1sen!2sin",
  mapsUrl:
    "https://www.google.com/maps/place/Emirates+Link+General+Contracting+LLC+-ELGC",
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 5:30 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
    timezone: "(GST)",
  },
  about:
    "ELGC is an Abu Dhabi-based industrial construction company delivering multidisciplinary projects inside operating plants and process facilities. Established in 2008, we undertake shutdowns, plant modifications, equipment erection, industrial civil works, structural steel, piping, relocation works and integrated EPC packages as a main contractor or specialist subcontractor.",
  footerAbout:
    "Abu Dhabi industrial construction company delivering shutdowns, plant modifications, equipment erection and EPC packages as a main contractor and specialist subcontractor.",
  aboutExtended:
    "Our teams are experienced in coordinating multi-discipline works within live operational environments — maintaining plant safety, protecting running production and meeting fixed outage windows. Every project is assigned a dedicated site management structure with clear accountability from scope award through to operational handover.",
  mission:
    "To deliver industrial projects through disciplined planning, responsible execution and clear accountability. We hold ourselves accountable to scope, schedule and workmanship on every project we undertake.",
  vision:
    "To be a trusted UAE execution partner for critical industrial projects. We build relationships through consistent delivery, technical competence and honest communication with the clients we serve.",
};

export const CERTIFICATIONS = COMPANY_CERTIFICATES.map(
  (cert) => `${cert.title} - ${cert.description}`
);
