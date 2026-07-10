import type { Metadata } from "next";
import { getArticlesByTipo } from "@/lib/content";
import { getCategoriaInfo } from "@/lib/categorias";
import type { Categoria } from "@/lib/content-schema";
import CategoryFilterBar from "@/components/listing/CategoryFilterBar";
import ArticleCard from "@/components/listing/ArticleCard";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos gratuitos sobre Gestão de Projetos, BPM, BPMN, Power BI, Jira, Scrum, OKR e Inteligência Artificial.",
};

interface Props {
  searchParams: { categoria?: Categoria };
}

export default function ArtigosPage({ searchParams }: Props) {
  const categoriaAtiva = searchParams.categoria;
  const artigos = getArticlesByTipo("artigo", categoriaAtiva);
  const categoriaInfo = categoriaAtiva ? getCategoriaInfo(categoriaAtiva) : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-500">
        Biblioteca
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {categoriaInfo ? `Artigos sobre ${categoriaInfo.nome}` : "Todos os artigos"}
      </h1>
      <p className="mt-3 max-w-xl text-ink/70">
        {categoriaInfo?.desc ??
          "Explore nosso acervo gratuito de artigos sobre gestão, processos e tecnologia."}
      </p>

      <div className="mt-8">
        <CategoryFilterBar basePath="/artigos" ativa={categoriaAtiva} />
      </div>

      {artigos.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artigos.map((article) => (
            <ArticleCard key={`${article.categoria}-${article.slug}`} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line p-10 text-center text-ink/60">
          Ainda não temos artigos publicados nessa categoria. Estamos
          produzindo novos conteúdos toda semana — volte em breve!
        </div>
      )}
    </div>
  );
}
