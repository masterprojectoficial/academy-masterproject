import Link from "next/link";
import ProcessFlowArt from "@/components/home/ProcessFlowArt";

const CATEGORIAS = [
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

const ETAPAS = [
  {
    numero: "01",
    titulo: "Explore",
    texto: "Navegue por artigos, guias e o glossário para entender qualquer tema, do zero.",
  },
  {
    numero: "02",
    titulo: "Aprenda",
    texto: "Aprofunde com tutoriais práticos, templates prontos e estudos de caso reais.",
  },
  {
    numero: "03",
    titulo: "Avance",
    texto: "Continue nos cursos completos da Master Project e conquiste seu certificado.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-500">
              Conteúdo aberto · Master Project
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Todo processo pode ser aprendido, mapeado e dominado.
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70 sm:text-lg">
              A maior biblioteca gratuita em português sobre Gestão de
              Projetos, BPM, BPMN, Power BI, Jira, Scrum, OKR e Inteligência
              Artificial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/artigos"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-brand-600"
              >
                Explorar conteúdo
              </Link>
              <a
                href="https://cursos.masterproject.com.br"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                Ver cursos
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProcessFlowArt />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — sequência real, numeração se justifica aqui */}
      <section className="border-y border-line bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Como funciona a jornada
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {ETAPAS.map((etapa) => (
              <div key={etapa.numero} className="relative pl-2">
                <span className="font-mono text-sm text-accent-600">{etapa.numero}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {etapa.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA DE CATEGORIAS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Explore por área
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
            {CATEGORIAS.length} áreas
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIAS.map((cat) => (
            <Link
              key={cat.slug}
              href={`/artigos?categoria=${cat.slug}`}
              className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-400"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
                {cat.slug}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-brand-600">
                {cat.nome}
              </h3>
              <p className="mt-1 text-sm text-ink/60">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
            Pronto para ir além da teoria?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-paper/70">
            Assista a 3 aulas gratuitas dos cursos da Master Project e veja na
            prática como aplicar o que você aprendeu aqui.
          </p>
          <a
            href="https://cursos.masterproject.com.br"
            className="mt-6 inline-block rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-300"
          >
            Assistir aulas gratuitas
          </a>
        </div>
      </section>
    </div>
  );
}
