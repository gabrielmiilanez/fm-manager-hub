import { Player } from "@/app/types/player";

interface PlayerTableProps {
  players: Player[];
  onPlayerClick: (player: Player) => void;
}

export function PlayerTable({
  players,
  onPlayerClick,
}: PlayerTableProps) {
  function getStatusStyle(status: Player["status"]) {
    switch (status) {
      case "Renovar":
        return "bg-yellow-500/10 text-yellow-400";

      case "Vender":
        return "bg-red-500/10 text-red-400";

      case "Emprestar":
        return "bg-purple-500/10 text-purple-400";

      default:
        return "bg-green-500/10 text-green-400";
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px]">
          <thead className="border-b border-slate-800">
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-4 font-medium">
                Jogador
              </th>

              <th className="px-6 py-4 font-medium">
                Posição
              </th>

              <th className="px-6 py-4 font-medium">
                Idade
              </th>

              <th className="px-6 py-4 font-medium">
                Papel
              </th>

              <th className="px-6 py-4 font-medium">
                Contrato
              </th>

              <th className="px-6 py-4 font-medium">
                Situação
              </th>
            </tr>
          </thead>

          <tbody>
            {players.map((player) => (
              <tr
                key={player.id}
                onClick={() => onPlayerClick(player)}
                className="cursor-pointer border-b border-slate-800 transition hover:bg-slate-800/50 last:border-0"
              >
                <td className="px-6 py-4 font-medium text-white">
                  {player.name}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {player.position}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {player.age}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    {player.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {player.contractEnd}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${getStatusStyle(
                      player.status
                    )}`}
                  >
                    {player.status}
                  </span>
                </td>
              </tr>
            ))}

            {players.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-slate-400"
                >
                  Nenhum jogador encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}