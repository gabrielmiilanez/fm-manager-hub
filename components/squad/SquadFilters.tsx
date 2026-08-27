interface SquadFiltersProps {
  search: string;
  positionFilter: string;

  onSearchChange: (value: string) => void;
  onPositionChange: (value: string) => void;
}

const positions = [
  "Todos",
  "Goleiro",
  "Zagueiro",
  "Lateral Direito",
  "Lateral Esquerdo",
  "Meio Campo",
  "Meio Atacante",
  "Atacante",
];

export function SquadFilters({
  search,
  positionFilter,
  onSearchChange,
  onPositionChange,
}: SquadFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="Buscar jogador..."
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 md:max-w-md"
      />

      <select
        value={positionFilter}
        onChange={(e) =>
          onPositionChange(e.target.value)
        }
        className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      >
        {positions.map((position) => (
          <option
            key={position}
            value={position}
          >
            {position}
          </option>
        ))}
      </select>
    </div>
  );
}