import type { CTACurso } from "@/lib/content-schema";

export default function CTACursoBox({ cta }: { cta: CTACurso }) {
  return (
    <div className="my-10 rounded-2xl border border-line bg-white p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-500">
        Quer ir além da teoria?
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        {cta.cursoNome}
      </h3>
      <p className="mt-2 text-sm text-ink/70">
        Aprenda na prática com a Master Project e receba certificado ao concluir.
      </p>
      <a
        href={cta.urlCurso}
        className="mt-4 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brand-600"
      >
        {cta.textoBotao ?? "Conheça o curso completo"}
      </a>
    </div>
  );
}
