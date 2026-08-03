import Link from "next/link";

export default function Footer() {
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
            <p className="leading-relaxed max-w-xs">
              Svetainių ir interneto sistemų studija Lietuvos verslui.
              Bendraujate tiesiogiai su projekto vykdytoju.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Naršymas</h3>
            <ul className="space-y-2.5">
              <li><Link href="/#paslaugos" className="hover:text-white transition-colors">Paslaugos</Link></li>
              <li><Link href="/#darbai" className="hover:text-white transition-colors">Darbai</Link></li>
              <li><Link href="/#kainos" className="hover:text-white transition-colors">Kainos</Link></li>
              <li><Link href="/#duk" className="hover:text-white transition-colors">DUK</Link></li>
              <li><Link href="/kontaktai" className="hover:text-white transition-colors">Kontaktai</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontaktai</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@sitestudio.lt" className="hover:text-white transition-colors">
                  info@sitestudio.lt
                </a>
              </li>
              <li>Dirbame visoje Lietuvoje, nuotoliniu būdu</li>
              <li>Atsakome per vieną darbo dieną</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} SiteStudio.lt. Visos teisės saugomos.</div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70">
            <Link href="/privatumo-politika" className="hover:text-white transition-colors">
              Privatumo politika
            </Link>
            <Link href="/slapuku-politika" className="hover:text-white transition-colors">
              Slapukų politika
            </Link>
            <Link href="/naudojimo-salygos" className="hover:text-white transition-colors">
              Paslaugų teikimo sąlygos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
