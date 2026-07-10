import Link from "next/link";

const COLUNAS = [
  {
    titulo: "Conteúdo",
    links: [
      { label: "Artigos", href: "/artigos" },
      { label: "Guias completos", href: "/guias" },
      { label: "Glossário", href: "/glossario" },
      { label: "Estudos de caso", href: "/estudos-de-caso" },
    ],
  },
  {
    titulo: "Recursos",
    links: [
      { label: "Ferramentas online", href: "/ferramentas" },
      { label: "Templates", href: "/templates" },
      { label: "Downloads", href: "/downloads" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    titulo: "Carreira",
    links: [
      { label: "Trilhas de carreira", href: "/carreira" },
      { label: "Salários da área", href: "/salarios" },
      { label: "Certificações", href: "/certificacoes" },
      { label: "Tutoriais", href: "/tutoriais" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">academy</p>
            <p className="mt-2 max-w-xs text-sm text-ink/60">
              Biblioteca gratuita sobre Gestão de Projetos, BPM, BI e
              Tecnologia, mantida pela Master Project.
            </p>
          </div>

          {COLUNAS.map((coluna) => (
            <div key={coluna.titulo}>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/40">
                {coluna.titulo}
              </p>
              <ul className="mt-3 space-y-2">
                {coluna.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/70 hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Master Project. Todos os direitos reservados.</p>
          <p className="flex gap-4">
            <a href="https://masterproject.com.br" className="hover:text-brand-600">
              masterproject.com.br
            </a>
            <a href="https://cursos.masterproject.com.br" className="hover:text-brand-600">
              cursos.masterproject.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
