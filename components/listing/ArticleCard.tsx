import Link from "next/link";
import type { Article } from "@/lib/content-schema";
import { getCategoriaInfo } from "@/lib/categorias";

const BASE_PATH_BY_TIPO: Record<string, string> = {
  artigo: "/artigos",
  guia: "/guias",
  glossario: "/glossario",
  tutorial: "/tutoriais",
  "estudo-de-caso": "/estudos-de-caso",
};

export default function ArticleCard({ article }: { article: Article }) {
  const categoriaInfo = getCategoriaInfo(article.categoria);
  const basePath = BASE_PATH_BY_TIPO[article.tipo] ?? "/artigos";

  return (
    <Link
      href={`${basePath}/${article.categoria}/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-400"
    >
      <span className="font-mono text-[11px] uppercase tracking-widest text-brand-500">
        {categoriaInfo?.nome ?? article.categoria}
      </span>
      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink group-hover:text-brand-600">
        {article.titulo}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-ink/60">
        {article.metaDescricao}
      </p>
      <span className="mt-4 font-mono text-xs text-ink/40">
        {article.tempoLeituraMin} min de leitura
      </span>
    </Link>
  );
}
