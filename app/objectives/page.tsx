import { Sidebar } from "@/components/layout/Sidebar";

export default function ObjectivesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-6 md:p-10">
          <div className="mb-10">
            <p className="text-sm text-slate-400">
              Planejamento da temporada
            </p>

            <h1 className="text-3xl font-bold">
              🎯 Objetivos
            </h1>

            <p className="mt-2 text-slate-400">
              Acompanhe as metas da sua carreira.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Nenhum objetivo cadastrado ainda.
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
              + Criar objetivo
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}