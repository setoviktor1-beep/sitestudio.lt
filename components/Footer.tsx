import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white font-bold text-base">
              S
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Site<span className="gradient-text">Studio</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-medium">
            <Link href="/privatumo-politika" className="hover:text-white transition-colors">
              Privatumo politika
            </Link>
            <Link href="/slapuku-politika" className="hover:text-white transition-colors">
              Slapukų politika
            </Link>
            <Link href="/naudojimo-salygos" className="hover:text-white transition-colors">
              Naudojimo sąlygos
            </Link>
          </div>

          <div>
            © {new Date().getFullYear()} SiteStudio.lt. Visos teisės saugomos.
          </div>
        </div>
      </div>
    </footer>
  );
}
