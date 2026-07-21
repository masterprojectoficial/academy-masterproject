import { getArticles } from "@/lib/content";
import CategoryFilterBar from "@/components/listing/CategoryFilterBar";
import Link from "next/link";

export default async function CarreiraPage() {
  const allArticles = await getArticles();
  const articles = allArticles.filter((art: any) => art.categoria === "carreira");

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Carreira e Mercado</h1>
      <p className="text-lg text-slate-600 mb-8">Guias estratégicos para acelerar sua ascensão profissional.</p>
      
      <CategoryFilterBar basePath="/artigos" ativa="carreira" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {articles.map((article: any) => (
          <Link 
            key={article.slug} 
            href={`/artigos/${article.categoria}/${article.slug}`}
            className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white block"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">{article.titulo}</h2>
            <p className="text-slate-600 text-sm line-clamp-3">{article.metaDescricao}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}