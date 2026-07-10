import type { Categoria } from "./content-schema";

export interface CategoriaInfo {
  nome: string;
  slug: Categoria;
  desc: string;
}

export const CATEGORIAS: CategoriaInfo[] = [
  { nome: "BPM", slug: "bpm", desc: "Gestão de processos de negócio" },
  { nome: "BPMN", slug: "bpmn", desc: "Notação de modelagem de processos" },
  { nome: "Bizagi", slug: "bizagi", desc: "Ferramenta de modelagem BPMN" },
  { nome: "Jira Software", slug: "jira", desc: "Gestão ágil de projetos" },
  { nome: "Gestão de Projetos", slug: "gestao-de-projetos", desc: "Metodologias e boas práticas" },
  { nome: "Scrum", slug: "scrum", desc: "Framework ágil" },
  { nome: "Kanban", slug: "kanban", desc: "Gestão visual de fluxo" },
  { nome: "Power BI", slug: "power-bi", desc: "Business Intelligence" },
  { nome: "Excel", slug: "excel", desc: "Planilhas e produtividade" },
  { nome: "OKR", slug: "okr", desc: "Metas e resultados-chave" },
  { nome: "Inteligência Artificial", slug: "ia", desc: "IA aplicada à gestão" },
];

export function getCategoriaInfo(slug: Categoria): CategoriaInfo | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}
