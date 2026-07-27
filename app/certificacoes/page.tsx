import Link from "next/link";

export default function CertificacoesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Guia de Certificações em Gestão e TI</h1>
        <p className="text-xl text-slate-600">O mapa definitivo das certificações mais valorizadas pelo mercado global. Descubra qual selo vai alavancar seu salário e como se preparar.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certificações Ágeis (Scrum)</h2>
            <p className="text-slate-700 mb-4 text-lg">Para quem deseja liderar times de alta performance no desenvolvimento de software e produtos digitais.</p>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">PSM I (Professional Scrum Master) - Scrum.org</h3>
              <p className="text-slate-600 mb-4">A certificação de entrada mais respeitada do mundo para Scrum Masters. Não exige renovação e prova que você domina o Guia Scrum original.</p>
              <ul className="list-disc pl-5 text-slate-700 space-y-2">
                <li><strong>Custo:</strong> $200 USD</li>
                <li><strong>Pré-requisito:</strong> Nenhum (mas exige muito estudo prático).</li>
                <li><strong>Foco:</strong> Papéis, Eventos e Artefatos do Scrum.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certificações de Projetos (PMI)</h2>
            <p className="text-slate-700 mb-4 text-lg">O padrão ouro internacional para Gerentes de Projetos complexos e híbridos.</p>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">PMP (Project Management Professional)</h3>
              <p className="text-slate-600 mb-4">A certificação mais famosa e exigida por multinacionais. Comprova sua experiência e capacidade de liderar projetos do início ao fim usando a 7ª Edição do PMBOK.</p>
              <ul className="list-disc pl-5 text-slate-700 space-y-2">
                <li><strong>Custo:</strong> ~$555 USD (sem filiação).</li>
                <li><strong>Pré-requisito:</strong> 36 a 60 meses de experiência na liderança de projetos.</li>
                <li><strong>Foco:</strong> Pessoas, Processos (Cascata e Ágil) e Ambiente de Negócios.</li>
              </ul>
            </div>
          </section>
        </div>

        <aside className="bg-slate-50 p-6 rounded-2xl border border-slate-200 h-fit">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Prepare-se com a Master Project</h3>
          <p className="text-slate-600 mb-6">Nossos cursos são desenhados com base na literatura oficial destas certificações. Estude o que realmente cai na prova e aplique no mundo real.</p>
          <a href="https://cursos-online.masterproject.com.br/course/11" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
            Testar Cursos Gratuitamente
          </a>
        </aside>
      </div>
    </main>
  );
}