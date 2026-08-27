import { Sidebar } from "@/components/layout/Sidebar";

const stats = [
  { label: "Jogos", value: "24" },
  { label: "Vitórias", value: "12" },
  { label: "Empates", value: "7" },
  { label: "Derrotas", value: "5" },
];

const objectives = [
  {
    title: "Permanência na Série B",
    progress: 78,
    status: "Dentro da meta",
  },
  {
    title: "Meio de tabela no Paulista",
    progress: 54,
    status: "Atenção",
  },
  {
    title: "Desempenho contra rivais",
    progress: 100,
    status: "Concluído",
  },
];

const alerts = [
  {
    icon: "🔴",
    text: "2 contratos vencendo nos próximos 6 meses",
  },
  {
    icon: "🟡",
    text: "3 jogadores estão subutilizados",
  },
  {
    icon: "🟢",
    text: "Folha salarial dentro do limite",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        {/* Conteúdo */}
        <section className="flex-1 p-6 md:p-10">
          {/* Header */}
          <header className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-slate-400">
                Minha carreira
              </p>

              <h2 className="text-3xl font-bold">
                Juventus da Mooca
              </h2>

              <p className="mt-1 text-slate-400">
                Temporada 2029
              </p>
            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
              + Nova partida
            </button>
          </header>

          {/* Estatísticas */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-sm text-slate-400">
                  {stat.label}
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Objetivos */}
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-6 text-xl font-semibold">
                🎯 Objetivos
              </h3>

              <div className="space-y-6">
                {objectives.map((objective) => (
                  <div key={objective.title}>
                    <div className="mb-2 flex justify-between gap-4">
                      <div>
                        <p className="font-medium">
                          {objective.title}
                        </p>

                        <p className="text-sm text-slate-400">
                          {objective.status}
                        </p>
                      </div>

                      <span className="font-semibold">
                        {objective.progress}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${objective.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Alertas */}
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-6 text-xl font-semibold">
                🚨 Alertas
              </h3>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.text}
                    className="flex gap-3 rounded-lg bg-slate-800/60 p-4"
                  >
                    <span>{alert.icon}</span>

                    <p className="text-sm text-slate-200">
                      {alert.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}