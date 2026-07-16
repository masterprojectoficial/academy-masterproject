import { getArticle, getCategorias, getSlugsByCategoria } from "@/lib/content";
import ArticleTemplate from "@/components/article/ArticleTemplate";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { categoria: any; slug: string };
};

// SEO Dinâmico e Poderoso
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const article = getArticle(params.categoria, params.slug);
    return {
      title: `${article.titulo} | Master Project`,
      description: article.metaDescricao,
      keywords: article.tags,
      openGraph: {
        title: article.titulo,
        description: article.metaDescricao,
        type: 'article',
        publishedTime: article.dataPublicacao,
        images: [article.imagemCapa],
      }
    };
  } catch {
    return { title: 'Artigo não encontrado | Master Project' };
  }
}

export default function ArtigoPage({ params }: Props) {
  try {
    const article = getArticle(params.categoria, params.slug);
    return <ArticleTemplate article={article} />;
  } catch (error) {
    notFound();
  }
}

// Gera as páginas estáticas para carregamento super rápido
export async function generateStaticParams() {
  const categorias = getCategorias();
  return categorias.flatMap((categoria) => {
    const slugs = getSlugsByCategoria(categoria);
    return slugs.map((slug) => ({ categoria, slug }));
  });
}