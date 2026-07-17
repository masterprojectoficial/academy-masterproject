import type { CTACurso } from "@/lib/content-schema";

export default function CTACursoBox({ cta }: { cta: any }) {
  if (!cta) return null; // Não exibe nada se não houver dados

  return (
    <div className="bg-brand-50 border-2 border-brand-200 p-8 rounded-2xl shadow-sm my-10">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{cta.titulo}</h3>
      <p className="text-slate-600 mb-6 text-lg">{cta.descricao}</p>
      <a 
        href={cta.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-brand-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-700 transition-all"
      >
        {cta.textoBotao || "Quero saber mais"}
      </a>
    </div>
  );
}