import Link from "next/link";

export type Crumb = { name: string; href?: string };

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by
 * the page itself via lib/jsonld.ts breadcrumbNode, so it always mirrors this.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Naršymo kelias" className="text-xs text-[#64748b]">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {idx > 0 && (
              <svg className="h-3 w-3 text-[#cbd5e1]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.2 14.8a1 1 0 010-1.4L10.6 10 7.2 6.6a1 1 0 111.4-1.4l4.1 4.1a1 1 0 010 1.4l-4.1 4.1a1 1 0 01-1.4 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#2456d6] transition-colors">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-[#334155]">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
