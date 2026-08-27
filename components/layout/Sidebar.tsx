const menuItems = [
  {
    icon: "🏠",
    label: "Dashboard",
    active: true,
  },
  {
    icon: "👥",
    label: "Elenco",
    active: false,
  },
  {
    icon: "🏟",
    label: "Clube",
    active: false,
  },
  {
    icon: "🗓",
    label: "Jogos",
    active: false,
  },
  {
    icon: "🎯",
    label: "Objetivos",
    active: false,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-900 p-6 md:block">
      <div className="mb-10">
        <h1 className="text-xl font-bold text-center">
          ⚽ FM Manager Hub
        </h1>

        <p className="mt-1 text-sm text-slate-400 text-center">
          Gerencie sua carreira no FM
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full rounded-lg px-4 py-3 text-left transition ${
              item.active
                ? "bg-slate-800 font-medium text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span className="mr-3">{item.icon}</span>

            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-6">
        <button className="w-full rounded-lg px-4 py-3 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
          ⚙️ Configurações
        </button>
      </div>
    </aside>
  );
}