import type { Metadata } from "next";
import { getArticle, getArticlesByTipo } from "@/lib/content";
import type { Categoria } from "@/lib/content-schema";
import ArticleTemplate from "@/components/article/ArticleTemplate";

interface Props {
  params: { categoria: Categoria; slug: string };
}

export function generateStaticParams() {
  return getArticlesByTipo("guia").map((article) => ({
    categoria: article.categoria,
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.categoria, params.slug);
  return {
    title: article.metaTitulo ?? article.titulo,
    description: article.metaDescricao,
    alternates: { canonical: `/guias/${params.categoria}/${params.slug}` },
    openGraph: {
      title: article.titulo,
      description: article.metaDescricao,
      images: article.imagemCapa ? [article.imagemCapa] : undefined,
    },
    robots: article.indexar === false ? { index: false } : undefined,
  };
}

export default function GuiaPage({ params }: Props) {
  const article = getArticle(params.categoria, params.slug);
  return <ArticleTemplate article={article} />;
}
