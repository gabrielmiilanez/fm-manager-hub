import Link from "next/link";

const menuItems = [
  {
    icon: "🏠",
    label: "Dashboard",
    href: "/",
  },
  {
    icon: "👥",
    label: "Elenco",
    href: "/squad",
  },
  {
    icon: "🏟",
    label: "Clube",
    href: "/club",
  },
  {
    icon: "🗓",
    label: "Jogos",
    href: "/matches",
  },
  {
    icon: "🎯",
    label: "Objetivos",
    href: "/objectives",
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-900 p-6 md:flex">
      <div className="mb-10">
        <h1 className="text-xl font-bold">
          ⚽ FM Manager Hub
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Gerencie sua carreira
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block w-full rounded-lg px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="mr-3">{item.icon}</span>

            {item.label}
          </Link>
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