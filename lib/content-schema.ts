/**
 * Schema central de conteúdo do Academy Master Project.
 * Todo artigo (independente da categoria) deve seguir esta estrutura,
 * seja escrito manualmente em MDX ou gerado via IA.
 */

export type ContentType =
  | "artigo"
  | "guia"
  | "glossario"
  | "tutorial"
  | "certificacao"
  | "carreira"
  | "salario"
  | "ferramenta"
  | "template"
  | "download"
  | "estudo-de-caso"
  | "faq";

export type Categoria =
  | "bpm"
  | "bpmn"
  | "bizagi"
  | "jira"
  | "gestao-de-projetos"
  | "scrum"
  | "kanban"
  | "power-bi"
  | "excel"
  | "okr"
  | "ia";

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface ConteudoRelacionado {
  titulo: string;
  slug: string;
  tipo: ContentType;
}

export interface CTACurso {
  cursoNome: string;
  cursoSlug: string;
  urlCurso: string; // link para cursos.masterproject.com.br
  textoBotao?: string; // default: "Conheça o curso completo"
}

export interface Frontmatter {
  // SEO
  titulo: string; // título otimizado (H1)
  metaTitulo?: string; // se diferente do título, para <title>
  metaDescricao: string; // 140-160 caracteres
  slug: string;
  palavraChavePrincipal: string;
  palavrasChaveSecundarias?: string[];

  // Classificação
  tipo: ContentType;
  categoria: Categoria;
  tags?: string[];

  // Publicação
  dataPublicacao: string; // ISO date
  dataAtualizacao?: string;
  autor: string;
  tempoLeituraMin?: number; // calculado automaticamente se ausente

  // Estrutura do artigo (ver ARTICLE_STRUCTURE.md)
  introducao: string;
  faq: FAQItem[];
  conteudosRelacionados: ConteudoRelacionado[];
  ctaCurso: CTACurso;

  // Conversão
  materialGratuitoUrl?: string; // link de download (PDF, template, etc.)
  aulasGratuitasUrl?: string; // default aponta para a isca principal
  certificadoDisponivel?: boolean;

  // Mídia
  imagemCapa?: string;
  imagemCapaAlt?: string;

  // Indexação
  indexar?: boolean; // default true; false para páginas thin/duplicadas
}

export interface Article extends Frontmatter {
  contentHtml: string; // corpo do artigo já renderizado a partir do MDX
}
