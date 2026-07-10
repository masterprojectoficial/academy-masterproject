# Academy Master Project

Portal de conteúdo gratuito sobre Gestão de Projetos, BPM, BPMN, BI, Power BI,
Jira, Scrum, OKR e Inteligência Artificial — parte do ecossistema Master
Project.

## Arquitetura do ecossistema

- `masterproject.com.br` — site institucional e páginas de venda
- `cursos.masterproject.com.br` — plataforma dos cursos
- `academy.masterproject.com.br` — **este projeto**: artigos, guias,
  glossário, ferramentas, templates

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Conteúdo em MDX com frontmatter tipado (`lib/content-schema.ts`)
- Deploy: Vercel
- DNS: HostGator

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Estrutura de pastas

```
app/            → rotas (App Router): artigos, guias, glossário, etc.
components/     → layout (header/footer) e componentes de artigo (FAQ, CTA, captura de lead)
content/        → artigos em MDX, organizados por categoria (bpm, bpmn, jira, scrum...)
lib/            → schema de conteúdo e funções de leitura dos MDX
scripts/        → utilitários, incluindo geração de novos artigos
```

## Como adicionar um novo artigo

1. Escolha a categoria (pasta dentro de `content/`)
2. Crie um arquivo `.mdx` com o frontmatter completo — veja
   `content/bpm/o-que-e-bpm.mdx` como referência
3. Preencha **todos** os campos obrigatórios do schema
   (`lib/content-schema.ts`): título, meta descrição, FAQ, CTA do curso,
   conteúdos relacionados
4. Rode `npm run dev` e confira em `/artigos/[categoria]/[slug]`

## Deploy

1. Push para o GitHub
2. Conectar o repositório na Vercel
3. Configurar o domínio `academy.masterproject.com.br` (CNAME na HostGator
   apontando para a Vercel)
4. Variáveis de ambiente: copiar `.env.example` para `.env.local` e
   preencher

## SEO

- Sitemap automático via `next-sitemap` (roda no `npm run build`)
- Schema.org: `Article` e `FAQPage` embutidos automaticamente em cada artigo
- Open Graph configurado no `app/layout.tsx` e por página
- URLs amigáveis: `/artigos/[categoria]/[slug]`

## Próximos passos

- [ ] Definir provedor de e-mail marketing e integrar `CapturaLead.tsx`
- [ ] Criar páginas de listagem (`/artigos`, `/guias`, etc.) com filtros por
      categoria
- [ ] Criar o glossário como página especial (lista alfabética + busca)
- [ ] Definir prompt-mestre de IA para geração de novos artigos em massa
- [ ] Configurar Google Search Console e Analytics
