import Link from "next/link";

const NAV_ITEMS = [
  { label: "Artigos", href: "/artigos" },
  { label: "Guias", href: "/guias" },
  { label: "Glossário", href: "/glossario" },
  { label: "Ferramentas", href: "/ferramentas" },
  { label: "Templates", href: "/templates" },
  { label: "Carreira", href: "/carreira" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            academy
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-500">
            master project
          </span>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://cursos-online.masterproject.com.br"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-brand-600"
        >
          Ver cursos
        </a>
      </div>
    </header>
  );
}
