import { MDXRemote } from "next-mdx-remote/rsc";
import { Article } from "@/lib/content-schema";
import FAQ from "../FAQ";
import CTACursoBox from "../CTACurso";

export default function ArticleTemplate({ article }: { article: Article }) {
  // SEO Schema Markup: Isso faz o Google mostrar seu artigo de forma rica
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.titulo,
    "description": article.metaDescricao,
    "image": article.imagemCapa,
    "author": { "@type": "Organization", "name": "Master Project" },
    "publisher": { "@type": "Organization", "name": "Master Project" }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{article.titulo}</h1>
        <p className="text-lg text-slate-600">{article.metaDescricao}</p>
      </header>

      {/* Conteúdo com Tipografia Profissional */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-blue-600">
        <MDXRemote source={article.contentHtml} />
      </div>

      <hr className="my-12" />

      {/* Seção de Conversão (Venda de Cursos) */}
      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
        <CTACursoBox cta={article.ctaCurso} />
      </div>

      <FAQ items={article.faq} />
    </main>
  );
}