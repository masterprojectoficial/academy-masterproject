import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article, Categoria, ContentType, Frontmatter } from "./content-schema";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getCategorias(): Categoria[] {
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name as Categoria);
}

export function getSlugsByCategoria(categoria: Categoria): string[] {
  const dir = path.join(CONTENT_DIR, categoria);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticle(categoria: Categoria, slug: string): Article {
  const fullPath = path.join(CONTENT_DIR, categoria, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;

  return {
    ...frontmatter,
    tempoLeituraMin:
      frontmatter.tempoLeituraMin ?? Math.ceil(readingTime(content).minutes),
    contentHtml: content, // renderização MDX real acontece no componente da página
  };
}

export function getAllArticles(): Article[] {
  const categorias = getCategorias();
  return categorias.flatMap((categoria) =>
    getSlugsByCategoria(categoria).map((slug) => getArticle(categoria, slug))
  );
}

export function getArticlesByTipo(
  tipo: ContentType,
  categoria?: Categoria
): Article[] {
  return getAllArticles()
    .filter((a) => a.tipo === tipo && (!categoria || a.categoria === categoria))
    .sort(
      (a, b) =>
        new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime()
    );
}

export function getArticlesRelacionados(article: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== article.slug && a.categoria === article.categoria)
    .slice(0, limit);
}
