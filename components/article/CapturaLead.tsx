"use client";

import { useState } from "react";

export default function CapturaLead({
  aulasGratuitasUrl,
}: {
  aulasGratuitasUrl?: string;
}) {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrar com provedor de e-mail marketing (ex: RD Station, Mailchimp)
    setEnviado(true);
  }

  return (
    <div className="my-10 rounded-2xl bg-ink p-6 text-paper">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-300">
        Aula gratuita
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold">
        Assista a 3 aulas gratuitas
      </h3>
      <p className="mt-2 text-sm text-paper/70">
        Deixe seu e-mail e receba acesso imediato ao conteúdo introdutório do
        curso, sem custo.
      </p>
      {enviado ? (
        <p className="mt-4 text-sm font-medium text-accent-300">
          Prontinho! Verifique seu e-mail para acessar as aulas.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full px-4 py-2.5 text-sm text-ink"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-300"
          >
            Quero assistir
          </button>
        </form>
      )}
    </div>
  );
}
