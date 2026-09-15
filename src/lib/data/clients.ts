import { IMAGES } from "@/lib/images";

export interface ClientLogo {
  slug: string;
  name: string;
  shortName: string;
  logo: string;
}

export interface ClientWhyItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ClientTestimonial {
  text: string;
  author: string;
  company: string;
  companyShort: string;
  logo: string;
}

export interface ClientFooterStat {
  value: number;
  suffix: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export const CLIENTS_HERO_FEATURES = [
  { title: "Est. 2008", subtitle: "Operating in Abu Dhabi", iconName: "Users" },
  { title: "100+", subtitle: "Projects Delivered", iconName: "Handshake" },
  { title: "10+", subtitle: "Industrial Clients", iconName: "Briefcase" },
  { title: "Long-Term", subtitle: "Client Relationships", iconName: "Globe" },
] as const;

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    slug: "emirates-steel-arkan",
    name: "Emirates Steel Arkan",
    shortName: "Emirates Steel Arkan",
    logo: "/images/clients/emirates-steel-arikan.png",
  },
  {
    slug: "al-ain-cement-factory",
    name: "Al Ain Cement Factory",
    shortName: "Al Ain Cement",
    logo: "/images/clients/al-ain-cement-factory.png",
  },
  {
    slug: "agthia",
    name: "Agthia",
    shortName: "Agthia",
    logo: "/images/clients/the-batter.png",
  },
  {
    slug: "sms-group",
    name: "SMS group",
    shortName: "SMS group",
    logo: "/images/clients/sms-group.png",
  },
  {
    slug: "rhi-magnesita",
    name: "RHI Magnesita",
    shortName: "RHI Magnesita",
    logo: "/images/clients/himagnestia.png",
  },
  {
    slug: "sarralle",
    name: "Sarralle",
    shortName: "Sarralle",
    logo: "/images/clients/sarralle.png",
  },
  {
    slug: "phoenix-services",
    name: "Phoenix Services LLC",
    shortName: "Phoenix Services",
    logo: "/images/clients/phoenix-services.png",
  },
  {
    slug: "cleanco",
    name: "Cleanco Waste Treatment LLC",
    shortName: "Cleanco",
    logo: "/images/clients/cleance.png",
  },
  {
    slug: "uma-lime-industry",
    name: "UMA Lime Industry LLC",
    shortName: "UMA Lime",
    logo: "/images/clients/uma-lime-industry-llc.png",
  },
];

export const CLIENTS_WHY_CHOOSE: ClientWhyItem[] = [
  {
    title: "Reliability",
    description: "We deliver on our commitments with consistency and integrity.",
    iconName: "ShieldCheck",
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in every aspect of our work.",
    iconName: "Award",
  },
  {
    title: "Timely Delivery",
    description: "We complete projects on schedule without compromising quality.",
    iconName: "Clock",
  },
  {
    title: "Collaborative Approach",
    description: "We work closely with clients as true partners in success.",
    iconName: "Users",
  },
  {
    title: "Safety First",
    description: "We prioritize the safety of our people, clients and communities.",
    iconName: "HardHat",
  },
  {
    title: "Value Creation",
    description: "We deliver solutions that create lasting value for our clients.",
    iconName: "BarChart3",
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [];

export const CLIENTS_FOOTER_STATS: ClientFooterStat[] = [
  { value: 2008, suffix: "", title: "Established", subtitle: "Abu Dhabi, UAE", iconName: "Award" },
  { value: 100, suffix: "+", title: "Projects Delivered", subtitle: "across industrial sectors", iconName: "Building2" },
  { value: 10, suffix: "+", title: "Industrial Clients", subtitle: "with repeat engagement", iconName: "Factory" },
  { value: 100, suffix: "+", title: "Mobilisation Capacity", subtitle: "trained operatives", iconName: "Users" },
];

export const CLIENTS_IMAGES = {
  hero: IMAGES.hero.clients,
  cta: IMAGES.hero.industries,
};
