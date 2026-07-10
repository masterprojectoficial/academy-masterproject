import type { FAQItem } from "@/lib/content-schema";

export default function FAQ({ items }: { items: FAQItem[] }) {
  if (!items?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  return (
    <section className="my-10">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Perguntas Frequentes
      </h2>
      <div className="mt-4 divide-y divide-line">
        {items.map((item) => (
          <details key={item.pergunta} className="group py-4">
            <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
              <span className="flex items-center justify-between">
                {item.pergunta}
                <span className="ml-4 font-mono text-brand-500 group-open:rotate-45 transition-transform">+</span>
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.resposta}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
