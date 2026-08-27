import { AppShell } from "@/components/layout/AppShell";

export default function SquadPage() {
  return (
    <AppShell>
      <div className="mb-10">
        <p className="text-sm text-slate-400">
          Gestão do time
        </p>

        <h1 className="text-3xl font-bold">
          👥 Elenco
        </h1>

        <p className="mt-2 text-slate-400">
          Gerencie todos os jogadores da sua equipe.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">
          Nenhum jogador cadastrado ainda.
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
          + Adicionar jogador
        </button>
      </div>
    </AppShell>
  );
}