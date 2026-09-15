import { ProposalHero } from "@/components/request-proposal/ProposalHero";
import { ProposalProcessSection } from "@/components/request-proposal/ProposalProcessSection";
import { ProposalFormSection } from "@/components/request-proposal/ProposalFormSection";
import { ProposalCtaSection } from "@/components/request-proposal/ProposalCtaSection";

export default function RequestProposalPage() {
  return (
    <>
      <ProposalHero />
      <ProposalProcessSection />
      <ProposalFormSection />
      <ProposalCtaSection />
    </>
  );
}
