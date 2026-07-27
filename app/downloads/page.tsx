import Link from "next/link";

export default function DownloadsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Central de Downloads e Materiais</h1>
        <p className="text-xl text-slate-600">Acelere seu trabalho com templates, planilhas e e-books gratuitos validados no mercado corporativo.</p>
      </header>

      <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Templates Prontos de Gestão</h2>
            <p className="text-slate-700 text-lg">Precisa de um modelo de Termo de Abertura (Project Charter), Matriz de Risco ou Backlog? Acesse nossa biblioteca gratuita de estruturas profissionais prontas para uso.</p>
          </div>
          <Link href="/templates" className="shrink-0 bg-slate-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-slate-800 transition">
            Acessar Templates
          </Link>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Guia de Estudos (3 Aulas Gratuitas)</h2>
            <p className="text-slate-700 text-lg">Em vez de baixar PDFs teóricos, assista às 3 primeiras aulas do nosso treinamento prático e veja a gestão acontecendo na tela do seu computador.</p>
          </div>
          <a href="https://cursos-online.masterproject.com.br/course/11" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition shadow-md">
            Liberar Acesso Grátis
          </a>
        </div>
      </section>
    </main>
  );
}