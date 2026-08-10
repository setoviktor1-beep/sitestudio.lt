import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";

export default function Footer({ dict, locale = "lt" }: { dict: Dict; locale?: Locale }) {
  const base = homePath(locale);
  const anchor = (hash: string) => (base === "/" ? `/#${hash}` : `${base}#${hash}`);
  const isLt = locale === "lt";

  // Dedicated Lithuanian service pages — the other locales don't have them.
  const serviceLinks = [
    { href: "/svetainiu-kurimas", label: "Svetainių kūrimas" },
    { href: "/el-parduotuviu-kurimas", label: "El. parduotuvių kūrimas" },
    { href: "/svetainiu-atnaujinimas", label: "Svetainių atnaujinimas" },
    { href: "/interneto-sistemu-kurimas", label: "Interneto sistemų kūrimas" },
    { href: "/ai-automatizavimas", label: "AI ir automatizavimas" },
  ];

  return (
    <footer className="bg-[#0f172a] py-14 text-white/60 text-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-10 mb-10 ${isLt ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
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
              {isLt ? (
                <>
                  <li><Link href="/paslaugos" className="hover:text-white transition-colors">{dict.nav.services}</Link></li>
                  <li><Link href="/darbai" className="hover:text-white transition-colors">{dict.nav.works}</Link></li>
                  <li><Link href="/apie" className="hover:text-white transition-colors">Apie SiteStudio</Link></li>
                  <li><Link href="/#kainos" className="hover:text-white transition-colors">{dict.nav.pricing}</Link></li>
                  <li><Link href="/kontaktai" className="hover:text-white transition-colors">{dict.footer.contacts}</Link></li>
                </>
              ) : (
                <>
                  <li><Link href={anchor("paslaugos")} className="hover:text-white transition-colors">{dict.nav.services}</Link></li>
                  <li><Link href={anchor("darbai")} className="hover:text-white transition-colors">{dict.nav.works}</Link></li>
                  <li><Link href={anchor("kainos")} className="hover:text-white transition-colors">{dict.nav.pricing}</Link></li>
                  <li><Link href={anchor("duk")} className="hover:text-white transition-colors">{dict.nav.faq}</Link></li>
                  <li><Link href={anchor("kontaktai")} className="hover:text-white transition-colors">{dict.footer.contacts}</Link></li>
                </>
              )}
            </ul>
          </div>

          {isLt && (
            <div>
              <h3 className="text-white font-semibold mb-4">Paslaugos</h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-white transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-white font-semibold mb-4">{dict.footer.contactsHeading}</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:viktor@sitestudio.lt" className="hover:text-white transition-colors">
                  viktor@sitestudio.lt
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
