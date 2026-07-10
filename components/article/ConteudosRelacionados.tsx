import Link from "next/link";
import type { ConteudoRelacionado } from "@/lib/content-schema";

const BASE_PATH_BY_TIPO: Record<string, string> = {
  artigo: "/artigos",
  guia: "/guias",
  glossario: "/glossario",
  tutorial: "/tutoriais",
  certificacao: "/certificacoes",
  carreira: "/carreira",
  salario: "/salarios",
  ferramenta: "/ferramentas",
  template: "/templates",
  download: "/downloads",
  "estudo-de-caso": "/estudos-de-caso",
  faq: "/faq",
};

export default function ConteudosRelacionados({
  itens,
}: {
  itens: ConteudoRelacionado[];
}) {
  if (!itens?.length) return null;

  return (
    <section className="my-10">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Continue aprendendo
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {itens.map((item) => (
          <li key={item.slug}>
            <Link
              href={`${BASE_PATH_BY_TIPO[item.tipo]}/${item.slug}`}
              className="block rounded-xl border border-line p-4 text-sm font-medium text-ink transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              {item.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
