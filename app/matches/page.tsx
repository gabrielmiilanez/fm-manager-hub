import { AppShell } from "@/components/layout/AppShell";

export default function MatchesPage() {
  return (
    <AppShell>
      <div>
        <p className="text-sm text-slate-400">
          Gestão da temporada
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          ⚽ Jogos
        </h1>

        <p className="mt-2 text-slate-400">
          Registre e acompanhe todas as partidas da temporada.
        </p>
      </div>
    </AppShell>
  );
}