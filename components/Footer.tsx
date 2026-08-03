import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";

export default function Footer({ dict, locale = "lt" }: { dict: Dict; locale?: Locale }) {
  const base = homePath(locale);
  const anchor = (hash: string) => (base === "/" ? `/#${hash}` : `${base}#${hash}`);

  return (
    <footer className="bg-[#0f172a] py-14 text-white/60 text-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2456d6] text-white font-bold">
                S
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                Site<span className="text-[#7c9bef]">Studio</span>
              </span>
            </div>
            <p className="leading-relaxed max-w-xs">{dict.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{dict.footer.navHeading}</h3>
            <ul className="space-y-2.5">
              <li><Link href={anchor("paslaugos")} className="hover:text-white transition-colors">{dict.nav.services}</Link></li>
              <li><Link href={anchor("darbai")} className="hover:text-white transition-colors">{dict.nav.works}</Link></li>
              <li><Link href={anchor("kainos")} className="hover:text-white transition-colors">{dict.nav.pricing}</Link></li>
              <li><Link href={anchor("duk")} className="hover:text-white transition-colors">{dict.nav.faq}</Link></li>
              <li><Link href={anchor("kontaktai")} className="hover:text-white transition-colors">{dict.footer.contacts}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{dict.footer.contactsHeading}</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@sitestudio.lt" className="hover:text-white transition-colors">
                  info@sitestudio.lt
                </a>
              </li>
              <li>{dict.footer.remote}</li>
              <li>{dict.footer.response}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} SiteStudio.lt. {dict.footer.rights}</div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70">
            <Link href="/privatumo-politika" className="hover:text-white transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href="/slapuku-politika" className="hover:text-white transition-colors">
              {dict.footer.cookies}
            </Link>
            <Link href="/naudojimo-salygos" className="hover:text-white transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
