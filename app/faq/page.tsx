import Link from "next/link";

export default function FaqPage() {
  const faqs = [
    {
      q: "Os cursos da Master Project emitem certificado?",
      a: "Sim! Todos os nossos cursos possuem certificado de conclusão válido em todo o território nacional, ideal para horas complementares na faculdade e para comprovação no LinkedIn."
    },
    {
      q: "Preciso de conhecimento prévio para iniciar?",
      a: "Não. Nossas trilhas de Gestão de Projetos, Jira e BPM são estruturadas do zero. Começamos com a teoria fundamental e avançamos até as práticas exigidas por grandes multinacionais."
    },
    {
      q: "Por quanto tempo tenho acesso aos cursos?",
      a: "O acesso depende do plano adquirido na nossa plataforma. Oferecemos opções de acesso anual, permitindo que você assista e revise as aulas no seu próprio ritmo."
    },
    {
      q: "O conteúdo está atualizado com o mercado (PMBOK 7 e Scrum Guide)?",
      a: "Absolutamente. Nosso corpo docente atualiza as aulas frequentemente para refletir as versões mais recentes das metodologias ágeis e preditivas utilizadas na indústria em 2026."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Perguntas Frequentes (FAQ)</h1>
        <p className="text-xl text-slate-600">Tire suas dúvidas sobre a Master Project, nossos cursos e nossa metodologia.</p>
      </header>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h2>
            <p className="text-slate-700 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-50 rounded-xl text-center border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Ainda tem dúvidas?</h3>
        <p className="text-slate-600 mb-4">Acesse as nossas 3 Aulas Gratuitas e veja com seus próprios olhos a qualidade do nosso ensino.</p>
        <a href="https://cursos-online.masterproject.com.br/course/11" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 font-bold hover:underline">
          Acessar Aulas Grátis &rarr;
        </a>
      </div>
    </main>
  );
}