import { COMPANY } from "@/lib/data/company";

export const CONTACT_HERO_FEATURES = [
  {
    title: "One Business Day",
    description: "We respond to all enquiries within one business day",
    iconName: "Headset",
  },
  {
    title: "Direct Access",
    description: "Speak directly with our project team",
    iconName: "Users",
  },
  {
    title: "Tailored Response",
    description: "We review your requirement before responding",
    iconName: "ClipboardList",
  },
  {
    title: "Full Scope Support",
    description: "From initial brief to scope definition",
    iconName: "Handshake",
  },
] as const;

export const CONTACT_OFFICES = [
  {
    name: "Corporate Office",
    city: "Abu Dhabi, United Arab Emirates",
    lines: [
      COMPANY.legalName,
      "Office 502, TESSCO Building",
      "Opposite Royal Rose Hotel, Electra Street",
      COMPANY.poBox,
      "Abu Dhabi, UAE",
    ],
  },
];

export const CONTACT_TOUCH_ITEMS = [
  {
    title: "Office Tel",
    iconName: "Phone",
    lines: [COMPANY.phone[0]],
  },
  {
    title: "Mobile",
    iconName: "Smartphone",
    lines: [COMPANY.phone[1]],
  },
  {
    title: "Email",
    iconName: "Mail",
    lines: COMPANY.email,
  },
  {
    title: "Website",
    iconName: "Globe",
    lines: [COMPANY.website],
  },
  {
    title: "Office Address",
    iconName: "MapPin",
    lines: [
      "Office 502, TESSCO Building",
      "Opposite Royal Rose Hotel, Electra Street",
      COMPANY.poBox + ", Abu Dhabi, UAE",
    ],
  },
  {
    title: "Business Hours",
    iconName: "Clock",
    lines: [
      COMPANY.hours.weekdays,
      COMPANY.hours.saturday,
      COMPANY.hours.sunday,
      COMPANY.hours.timezone,
    ],
  },
];
