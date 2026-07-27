import Link from "next/link";

export default function SalariosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12 border-b border-slate-200 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Guia Salarial: Tecnologia e Gestão (2026)</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Descubra quanto ganham os profissionais de Gestão de Projetos, Processos e Agilidade no mercado brasileiro e internacional.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Média Salarial por Cargo</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="p-4 font-bold border-b-2 border-slate-200 rounded-tl-lg">Cargo</th>
                <th className="p-4 font-bold border-b-2 border-slate-200">Júnior (1-2 anos)</th>
                <th className="p-4 font-bold border-b-2 border-slate-200">Pleno (3-5 anos)</th>
                <th className="p-4 font-bold border-b-2 border-slate-200 rounded-tr-lg">Sênior (+5 anos)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900">Scrum Master</td>
                <td className="p-4">R$ 5.500</td>
                <td className="p-4">R$ 8.500</td>
                <td className="p-4">R$ 13.000+</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900">Product Owner (PO)</td>
                <td className="p-4">R$ 6.000</td>
                <td className="p-4">R$ 9.500</td>
                <td className="p-4">R$ 15.000+</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900">Gerente de Projetos (PM)</td>
                <td className="p-4">R$ 6.500</td>
                <td className="p-4">R$ 10.000</td>
                <td className="p-4">R$ 18.000+</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900">Analista de Processos (BPM)</td>
                <td className="p-4">R$ 4.500</td>
                <td className="p-4">R$ 7.500</td>
                <td className="p-4">R$ 11.000+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-4">* Valores baseados em regimes de contratação CLT em polos tecnológicos (SP, PR, SC, MG) e trabalho remoto. Vagas Internacionais (EUA/Europa) pagam em Dólar/Euro, elevando os ganhos substancialmente.</p>
      </section>

      <section className="bg-blue-50 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Como alcançar o teto salarial?</h2>
        <p className="text-lg text-slate-700 mb-6">Profissionais de alto nível não vendem horas, vendem a capacidade de resolver problemas complexos. Dominar ferramentas como Jira e metodologias como Scrum e PMI é o caminho mais rápido.</p>
        <Link href="/artigos/carreira" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
          Ler Guias de Carreira
        </Link>
      </section>
    </main>
  );
}