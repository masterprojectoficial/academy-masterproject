import type { Article } from "@/lib/content-schema";
import FAQ from "./FAQ";
import CTACursoBox from "./CTACurso";
import CapturaLead from "./CapturaLead";
import ConteudosRelacionados from "./ConteudosRelacionados";

export default function ArticleTemplate({ article }: { article: Article }) {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titulo,
    description: article.metaDescricao,
    datePublished: article.dataPublicacao,
    dateModified: article.dataAtualizacao ?? article.dataPublicacao,
    author: { "@type": "Person", name: article.autor },
    image: article.imagemCapa,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <p className="font-mono text-xs uppercase tracking-widest text-brand-500">
        {article.categoria}
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
        {article.titulo}
      </h1>
      <p className="mt-3 text-sm text-ink/50">
        {article.tempoLeituraMin} min de leitura · Atualizado em{" "}
        {new Date(article.dataAtualizacao ?? article.dataPublicacao).toLocaleDateString(
          "pt-BR"
        )}
      </p>

      <p className="mt-6 text-lg leading-relaxed text-ink/80">{article.introducao}</p>

      <div
        className="prose mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      <FAQ items={article.faq} />

      <CTACursoBox cta={article.ctaCurso} />
      <CapturaLead aulasGratuitasUrl={article.aulasGratuitasUrl} />

      <ConteudosRelacionados itens={article.conteudosRelacionados} />
    </article>
  );
}
