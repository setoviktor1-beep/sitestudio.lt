import LegalPage from "@/components/LegalPage";
import { legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata("lt", "cookies");

export default function SlapukuPolitika() {
  return <LegalPage locale="lt" documentKey="cookies" />;
}
