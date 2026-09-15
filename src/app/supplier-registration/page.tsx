import { SupplierRegistrationHero } from "@/components/supplier-registration/SupplierRegistrationHero";
import { SupplierRegistrationForm } from "@/components/supplier-registration/SupplierRegistrationForm";

export const metadata = {
  title: "Supplier Registration",
  description:
    "Register as a supplier with ELGC. Complete the vendor registration form with company, bank, and compliance details.",
};

export default function SupplierRegistrationPage() {
  return (
    <>
      <SupplierRegistrationHero />
      <SupplierRegistrationForm />
    </>
  );
}
