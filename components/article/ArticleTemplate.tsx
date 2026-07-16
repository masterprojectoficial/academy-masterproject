import type { Article } from "@/lib/content-schema";
import FAQ from "./FAQ";
import CTACursoBox from "./CTACurso";
import CapturaLead from "./CapturaLead";
import ConteudosRelacionados from "./ConteudosRelacionados";
import { MDXRemote } from "next-mdx-remote/rsc"; // Importação nova!

export default function ArticleTemplate({ article }: { article: Article }) {
  // SEO Avançado: O Google vai entender o autor, a data e conectar ao seu site
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.titulo,
    description: article.metaDescricao,
    datePublished: article.dataPublicacao,
    dateModified: article.dataAtualizacao ?? article.dataPublicacao,
    author: { 
      "@type": "Organization", 
      name: "Master Project",
      url: "https://masterproject.com.br"
    },
    publisher: {
      "@type": "Organization",
      name: "Master Project",
      logo: {
        "@type": "ImageObject",
        url: "https://masterproject.com.br/logo.png" // Ajuste para sua logo real
      }
    },
    image: article.imagemCapa,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* CABEÇALHO DO ARTIGO */}
      <header className="mb-12 text-center">
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-brand-500 mb-4">
          {article.categoria}
        </p>
        <h1 className="font-display text-4xl font-black leading-tight tracking-tighter text-ink sm:text-5xl lg:text-6xl mb-6">
          {article.titulo}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-ink/60">
          <span>{article.tempoLeituraMin} min de leitura</span>
          <span>&middot;</span>
          <time dateTime={article.dataAtualizacao ?? article.dataPublicacao}>
            Atualizado em {new Date(article.dataAtualizacao ?? article.dataPublicacao).toLocaleDateString("pt-BR", {
              day: '2-digit', month: 'long', year: 'numeric'
            })}
          </time>
        </div>
      </header>

      {/* INTRODUÇÃO DESTACADA */}
      <p className="mt-6 text-xl leading-relaxed text-ink/80 font-medium border-l-4 border-accent-500 pl-6 mb-12">
        {article.introducao}
      </p>

      {/* CONTEÚDO RENDERIZADO COM MDX (Fim dos ** quebrados!) */}
      <div className="prose prose-lg prose-brand max-w-none 
                      prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight 
                      prose-a:text-brand-500 prose-a:font-semibold hover:prose-a:text-brand-600
                      prose-img:rounded-2xl prose-img:shadow-xl
                      prose-strong:font-black prose-strong:text-ink">
        {/* Assumindo que seu lib/content envia o markdown bruto na propriedade contentRaw ou contentHtml */}
        <MDXRemote source={article.contentRaw || article.contentHtml} />
      </div>

      <hr className="my-16 border-line" />

      {/* SEÇÃO DE CONVERSÃO */}
      <div className="space-y-12">
        <FAQ items={article.faq} />
        
        {/* Aqui nós vamos injetar os links exatos baseados no frontmatter do MDX */}
        <CTACursoBox cta={article.ctaCurso} />
        
        {/* Se tiver link de aula gratuita (ID 11), exibe a captura de lead */}
        {article.aulasGratuitasUrl && (
          <CapturaLead aulasGratuitasUrl={article.aulasGratuitasUrl} />
        )}

        <ConteudosRelacionados itens={article.conteudosRelacionados} />
      </div>
    </article>
  );
}