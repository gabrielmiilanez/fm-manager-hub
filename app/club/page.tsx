import { Sidebar } from "@/components/layout/Sidebar";

export default function ClubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-6 md:p-10">
          <div className="mb-10">
            <p className="text-sm text-slate-400">
              Informações da carreira
            </p>

            <h1 className="text-3xl font-bold">
              🏟 Clube
            </h1>

            <p className="mt-2 text-slate-400">
              Gerencie as informações do seu clube.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              As informações do clube aparecerão aqui.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}