import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactOfficesSection } from "@/components/contact/ContactOfficesSection";
import { ContactCtaSection } from "@/components/contact/ContactCtaSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactOfficesSection />
      <ContactCtaSection />
    </>
  );
}
