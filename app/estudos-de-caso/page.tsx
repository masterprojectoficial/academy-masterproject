import Link from "next/link";

export default function EstudosDeCasoPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Estudos de Caso: <span className="text-blue-600">Resultados Reais</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Descubra como a aplicação prática de Gestão Ágil (Scrum/Jira) e Mapeamento de Processos (BPM) transformou o caos operacional em lucro e previsibilidade.
        </p>
      </header>

      <div className="space-y-16">
        {/* Estudo de Caso 1: Scrum e Jira */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="bg-blue-900 p-10 lg:w-2/5 flex flex-col justify-center text-white">
            <div className="uppercase tracking-widest text-blue-300 font-bold text-sm mb-4">Transformação Ágil</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">De 40% de Atrasos para Entregas Contínuas em 60 Dias</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📉</span>
                <p className="text-blue-100"><strong>Antes:</strong> Prazos estourados e equipe técnica desmotivada.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-blue-100"><strong>Depois:</strong> Ciclos de 14 dias (Sprints) e 100% de previsibilidade no Jira.</p>
              </div>
            </div>
          </div>
          <div className="p-10 lg:w-3/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">O Desafio</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Uma empresa de tecnologia do setor financeiro (Fintech) estava perdendo clientes devido ao atraso no lançamento de novas funcionalidades. A gestão utilizava planilhas manuais e o modelo em cascata. Os desenvolvedores sofriam com mudanças de escopo diárias e o *Lead Time* ultrapassava 45 dias.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">A Solução Master Project</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Implementação rigorosa do framework <strong>Scrum</strong>. Treinamos a liderança para atuar como Product Owners, isolando a equipe técnica de interrupções através da <strong>Meta da Sprint</strong>. Todo o fluxo foi digitalizado e automatizado utilizando o <strong>Jira Software</strong>, criando painéis visuais de *Burndown* e *Velocity*.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-1">-65%</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Redução no Lead Time</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-1">Zero</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Atrasos de Cronograma</div>
              </div>
            </div>
          </div>
        </article>

        {/* Estudo de Caso 2: BPM e Processos */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse">
          <div className="bg-slate-900 p-10 lg:w-2/5 flex flex-col justify-center text-white">
            <div className="uppercase tracking-widest text-slate-400 font-bold text-sm mb-4">Otimização de Processos (BPM)</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Como o Mapeamento AS-IS Poupou R$ 1.2 Milhão ao Ano</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💸</span>
                <p className="text-slate-300"><strong>Antes:</strong> Retrabalho extremo, multas e falta de padronização.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚙️</span>
                <p className="text-slate-300"><strong>Depois:</strong> Fluxo 100% desenhado em BPMN, eliminando gargalos.</p>
              </div>
            </div>
          </div>
          <div className="p-10 lg:w-3/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">O Desafio</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Uma grande rede de varejo estava sofrendo com um processo de compras caótico. Aprovações eram feitas por e-mail ou WhatsApp, gerando perda de informações, compras duplicadas e multas por atraso de pagamento a fornecedores. Ninguém sabia exatamente de quem era a responsabilidade em cada etapa.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">A Solução Master Project</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Aplicação das práticas do CBOK. Iniciamos com entrevistas (Gemba Walk) e desenhamos a realidade caótica (AS-IS) usando a notação <strong>BPMN no Bizagi</strong>. Descobrimos 4 etapas de aprovação redundantes. Desenhamos o cenário futuro (TO-BE), implementando a <strong>Matriz RACI</strong> para definir responsabilidades claras e automatizamos os alertas de prazos.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">R$ 1.2M</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Economia Direta em 12 meses</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">80%</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Mais Rapidez nas Aprovações</div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <section className="mt-20 bg-blue-50 border border-blue-100 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-sm">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Sua empresa pode ser o próximo caso de sucesso
        </h2>
        <p className="text-xl text-slate-700 mb-8">
          Aprenda exatamente as mesmas técnicas e frameworks que os nossos especialistas utilizaram nestes estudos de caso. 
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://cursos-online.masterproject.com.br/course/11" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition text-lg shadow-md">
            Assistir às 3 Aulas Grátis
          </a>
          <a href="https://cursos-online.masterproject.com.br" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 border-2 border-blue-200 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition text-lg">
            Ver Todos os Cursos
          </a>
        </div>
      </section>
    </main>
  );
}