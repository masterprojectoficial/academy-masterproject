#!/usr/bin/env node
/**
 * Cria um novo arquivo .mdx em content/{categoria}/{slug}.mdx já com o
 * esqueleto do frontmatter (schema de lib/content-schema.ts).
 *
 * Uso:
 *   npm run new-article
 *
 * Depois de criado, cole o resultado do Prompt-Mestre
 * (docs/PROMPT-MESTRE-IA.md) dentro do arquivo, ou preencha manualmente.
 */
import fs from "fs";
import path from "path";
import readline from "readline";

const CATEGORIAS = [
  "bpm",
  "bpmn",
  "bizagi",
  "jira",
  "gestao-de-projetos",
  "scrum",
  "kanban",
  "power-bi",
  "excel",
  "okr",
  "ia",
];

const TIPOS = [
  "artigo",
  "guia",
  "glossario",
  "tutorial",
  "certificacao",
  "carreira",
  "salario",
  "ferramenta",
  "template",
  "download",
  "estudo-de-caso",
  "faq",
];

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  console.log("\n=== Novo artigo — Academy Master Project ===\n");

  const titulo = await ask("Título do artigo: ");
  const slugSugerido = slugify(titulo);
  const slugInput = await ask(`Slug (enter para usar "${slugSugerido}"): `);
  const slug = slugInput.trim() || slugSugerido;

  console.log(`\nCategorias disponíveis: ${CATEGORIAS.join(", ")}`);
  let categoria = (await ask("Categoria: ")).trim();
  while (!CATEGORIAS.includes(categoria)) {
    categoria = (await ask(`Categoria inválida. Escolha uma de [${CATEGORIAS.join(", ")}]: `)).trim();
  }

  console.log(`\nTipos disponíveis: ${TIPOS.join(", ")}`);
  let tipo = (await ask("Tipo (enter para 'artigo'): ")).trim() || "artigo";
  while (!TIPOS.includes(tipo)) {
    tipo = (await ask(`Tipo inválido. Escolha um de [${TIPOS.join(", ")}]: `)).trim();
  }

  const palavraChave = await ask("Palavra-chave principal: ");
  const autor = (await ask("Autor (enter para 'Equipe Master Project'): ")).trim() || "Equipe Master Project";

  rl.close();

  const dir = path.join(process.cwd(), "content", categoria);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`\nJá existe um arquivo em ${filePath}. Escolha outro slug.`);
    process.exit(1);
  }

  const hoje = new Date().toISOString().slice(0, 10);

  const conteudo = `---
titulo: "${titulo}"
metaDescricao: "" # 140-160 caracteres
slug: "${slug}"
palavraChavePrincipal: "${palavraChave}"
palavrasChaveSecundarias:
  - ""
tipo: "${tipo}"
categoria: "${categoria}"
tags: []
dataPublicacao: "${hoje}"
autor: "${autor}"
introducao: ""
faq:
  - pergunta: ""
    resposta: ""
conteudosRelacionados: []
ctaCurso:
  cursoNome: ""
  cursoSlug: ""
  urlCurso: "https://cursos-online.masterproject.com.br/"
aulasGratuitasUrl: "https://cursos-online.masterproject.com.br/"
certificadoDisponivel: true
---

## Introdução ao tema

Conteúdo gerado pelo Prompt-Mestre (docs/PROMPT-MESTRE-IA.md) ou escrito
manualmente entra aqui.
`;

  fs.writeFileSync(filePath, conteudo, "utf8");
  console.log(`\n✅ Criado: ${path.relative(process.cwd(), filePath)}`);
  console.log("Agora: preencha o conteúdo (ou cole o resultado do Prompt-Mestre) e rode 'npm run dev'.\n");
}

main();
