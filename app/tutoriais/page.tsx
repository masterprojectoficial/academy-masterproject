import Link from "next/link";

export default function TutoriaisPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12 border-b border-slate-200 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Tutoriais e Manuais Práticos</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Aprenda o passo a passo de como configurar ferramentas, estruturar frameworks e mapear processos.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Jira Software & Confluence</h2>
          <p className="text-slate-600 mb-6">Aprenda a configurar fluxos de trabalho, Sprints e quadros Kanban avançados.</p>
          <Link href="/artigos/jira" className="text-blue-600 font-bold text-lg hover:underline">
            Ver tutoriais de Jira &rarr;
          </Link>
        </div>

        <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">BPM & Bizagi</h2>
          <p className="text-slate-600 mb-6">Passo a passo de como desenhar processos (AS-IS e TO-BE) utilizando notação BPMN oficial.</p>
          <Link href="/artigos/bpm" className="text-blue-600 font-bold text-lg hover:underline">
            Ver tutoriais de Processos &rarr;
          </Link>
        </div>

        <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Gestão Ágil (Scrum)</h2>
          <p className="text-slate-600 mb-6">Guias definitivos sobre como rodar as cerimônias (Daily, Planning, Review, Retrospective).</p>
          <Link href="/artigos/scrum" className="text-blue-600 font-bold text-lg hover:underline">
            Ver tutoriais de Ágil &rarr;
          </Link>
        </div>

        <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors bg-blue-50">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cursos Completos em Vídeo</h2>
          <p className="text-slate-700 mb-6">Prefere aprender assistindo? Teste nossos treinamentos visuais com suporte exclusivo do professor.</p>
          <a href="https://cursos-online.masterproject.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold text-lg hover:underline">
            Acessar Plataforma &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}