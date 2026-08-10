import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata("lt", "privacy");

export default function PrivatumoPolitika() {
  return <LegalPage locale="lt" documentKey="privacy" />;
}
