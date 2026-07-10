import Link from "next/link";
import { CATEGORIAS } from "@/lib/categorias";
import type { Categoria } from "@/lib/content-schema";

export default function CategoryFilterBar({
  basePath,
  ativa,
}: {
  basePath: string;
  ativa?: Categoria;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={basePath}
        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          !ativa
            ? "border-ink bg-ink text-paper"
            : "border-line text-ink/70 hover:border-brand-400"
        }`}
      >
        Todos
      </Link>
      {CATEGORIAS.map((cat) => (
        <Link
          key={cat.slug}
          href={`${basePath}?categoria=${cat.slug}`}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            ativa === cat.slug
              ? "border-ink bg-ink text-paper"
              : "border-line text-ink/70 hover:border-brand-400"
          }`}
        >
          {cat.nome}
        </Link>
      ))}
    </div>
  );
}
