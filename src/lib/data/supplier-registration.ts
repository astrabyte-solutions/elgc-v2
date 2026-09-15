export const SUPPLIER_CODE_OF_CONDUCT_URL =
  "https://www.emiratessteel.com/images/pdf/2019/ES-Suppliers-Code-of-Conduct-ver101019.pdf";

export const SUPPLIER_HSE_REQUIREMENTS_URL =
  "https://www.emiratessteel.com/wp-content/uploads/2021/04/ES-Contractor-Safety-Requirements-V9.pdf";

export const SUPPLIER_COUNTRIES = [
  "United Arab Emirates (AE)",
  "Saudi Arabia (SA)",
  "Oman (OM)",
  "Qatar (QA)",
  "Kuwait (KW)",
  "Bahrain (BH)",
  "India (IN)",
  "Other",
];

export const SUPPLIER_CURRENCIES = ["AED", "USD", "EUR", "GBP", "SAR", "OMR", "QAR"];

export const SUPPLIER_CERTIFICATE_TYPES = {
  tradeLicense: "Trade License Details (TL Reg)",
  vat: "VAT Registration (VAT Reg)",
  poa: "Power of Attorney (PoA)",
  healthSafety: "Health and Safety (OHSAS 18001 / ISO 45001)",
  quality: "Quality Management (ISO 9001)",
};

export const SUPPLIER_WIZARD_STEPS = [
  { title: "Tax Registration" },
  { title: "General Information" },
  { title: "Company Address" },
  { title: "Financial & Bank" },
  { title: "Company Documents" },
  { title: "Industry Information" },
  { title: "Customer Information" },
  { title: "Category Specific" },
  { title: "Certificates" },
] as const;

export const SUPPLIER_NEXT_STEPS = [
  {
    title: "Form Review",
    description: "Our procurement team reviews your registration details and supporting documents.",
  },
  {
    title: "Verification",
    description: "We verify trade license, VAT, bank, and compliance documentation.",
  },
  {
    title: "Vendor Onboarding",
    description: "Approved suppliers are onboarded to our vendor management system.",
  },
  {
    title: "Activation",
    description: "You receive confirmation and can participate in sourcing events.",
  },
];
