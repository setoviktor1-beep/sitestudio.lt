import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata("lt", "terms");

export default function NaudojimoSalygos() {
  return <LegalPage locale="lt" documentKey="terms" />;
}
