import { ClientsHero } from "@/components/clients/ClientsHero";
import { ClientsLogosSection } from "@/components/clients/ClientsLogosSection";
import { ClientsWhySection } from "@/components/clients/ClientsWhySection";
import { ClientsTestimonialsSection } from "@/components/clients/ClientsTestimonialsSection";
import { ClientsCtaSection } from "@/components/clients/ClientsCtaSection";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientsLogosSection />
      <ClientsWhySection />
      <ClientsTestimonialsSection />
      <ClientsCtaSection />
    </>
  );
}
