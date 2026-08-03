import HomePage from "@/components/HomePage";
import { getDict } from "@/lib/i18n";

export default async function Home() {
  const dict = await getDict("lt");
  return <HomePage dict={dict} locale="lt" />;
}
