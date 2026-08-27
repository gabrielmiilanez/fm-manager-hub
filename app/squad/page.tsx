"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";

type Player = {
  id: number;
  name: string;
  position: string;
  age: number;
  role: string;
  contractEnd: string;
  status: string;
};

const initialPlayers: Player[] = [
  {
    id: 1,
    name: "Passarelli",
    position: "GR",
    age: 28,
    role: "Titular",
    contractEnd: "2029",
    status: "Renovar",
  },
  {
    id: 2,
    name: "Titi",
    position: "DC",
    age: 27,
    role: "Titular",
    contractEnd: "2029",
    status: "Renovar",
  },
  {
    id: 3,
    name: "Rafael",
    position: "DC",
    age: 25,
    role: "Titular",
    contractEnd: "2030",
    status: "OK",
  },
  {
    id: 4,
    name: "Naranjo",
    position: "MC",
    age: 24,
    role: "Titular",
    contractEnd: "2029",
    status: "Renovar",
  },
  {
    id: 5,
    name: "Paulinho",
    position: "MO",
    age: 26,
    role: "Titular",
    contractEnd: "2030",
    status: "OK",
  },
  {
    id: 6,
    name: "Lucca Drummond",
    position: "PL",
    age: 27,
    role: "Titular",
    contractEnd: "2030",
    status: "OK",
  },
];

const positions = ["Todos", "GR", "DC", "LD", "LE", "MC", "MO", "PL"];

export default function SquadPage() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [search, setSearch] = useState("");
  const [positionFilter, setPositionFilter] = useState("Todos");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "PL",
    age: "",
    role: "Reserva",
    contractEnd: "",
    status: "OK",
  });

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPosition =
      positionFilter === "Todos" ||
      player.position === positionFilter;

    return matchesSearch && matchesPosition;
  });

  function handleAddPlayer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newPlayer.name || !newPlayer.age) {
      return;
    }

    const player: Player = {
      id: Date.now(),
      name: newPlayer.name,
      position: newPlayer.position,
      age: Number(newPlayer.age),
      role: newPlayer.role,
      contractEnd: newPlayer.contractEnd || "Não informado",
      status: newPlayer.status,
    };

    setPlayers((currentPlayers) => [...currentPlayers, player]);

    setNewPlayer({
      name: "",
      position: "PL",
      age: "",
      role: "Reserva",
      contractEnd: "",
      status: "OK",
    });

    setIsFormOpen(false);
  }

  return (
    <AppShell>
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
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

        <button
          onClick={() => setIsFormOpen(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium transition hover:bg-blue-500"
        >
          + Adicionar jogador
        </button>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Buscar jogador..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 md:max-w-md"
        />

        <select
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead className="border-b border-slate-800 bg-slate-900">
              <tr className="text-left text-sm text-slate-400">
                <th className="px-6 py-4 font-medium">Jogador</th>
                <th className="px-6 py-4 font-medium">Posição</th>
                <th className="px-6 py-4 font-medium">Idade</th>
                <th className="px-6 py-4 font-medium">Papel</th>
                <th className="px-6 py-4 font-medium">Contrato</th>
                <th className="px-6 py-4 font-medium">Situação</th>
              </tr>
            </thead>

            <tbody>
              {filteredPlayers.map((player) => (
                <tr
                  key={player.id}
                  className="border-b border-slate-800 last:border-0 hover:bg-slate-800/50"
                >
                  <td className="px-6 py-4 font-medium">
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
                      className={`rounded-full px-3 py-1 text-sm ${
                        player.status === "Renovar"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-green-500/10 text-green-400"
                      }`}
                    >
                      {player.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredPlayers.length === 0 && (
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

      {/* Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Novo jogador
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Adicione um jogador ao elenco.
                </p>
              </div>

              <button
                onClick={() => setIsFormOpen(false)}
                className="text-xl text-slate-400 hover:text-white"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddPlayer} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Nome
                </label>

                <input
                  type="text"
                  value={newPlayer.name}
                  onChange={(e) =>
                    setNewPlayer({
                      ...newPlayer,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="Nome do jogador"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Posição
                  </label>

                  <select
                    value={newPlayer.position}
                    onChange={(e) =>
                      setNewPlayer({
                        ...newPlayer,
                        position: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                  >
                    {positions
                      .filter((position) => position !== "Todos")
                      .map((position) => (
                        <option key={position} value={position}>
                          {position}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Idade
                  </label>

                  <input
                    type="number"
                    min="14"
                    max="60"
                    value={newPlayer.age}
                    onChange={(e) =>
                      setNewPlayer({
                        ...newPlayer,
                        age: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Ex.: 24"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Papel
                  </label>

                  <select
                    value={newPlayer.role}
                    onChange={(e) =>
                      setNewPlayer({
                        ...newPlayer,
                        role: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                  >
                    <option>Titular</option>
                    <option>Rotação</option>
                    <option>Reserva</option>
                    <option>Promessa</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Contrato até
                  </label>

                  <input
                    type="text"
                    value={newPlayer.contractEnd}
                    onChange={(e) =>
                      setNewPlayer({
                        ...newPlayer,
                        contractEnd: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Ex.: 2030"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Situação
                </label>

                <select
                  value={newPlayer.status}
                  onChange={(e) =>
                    setNewPlayer({
                      ...newPlayer,
                      status: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option>OK</option>
                  <option>Renovar</option>
                  <option>Vender</option>
                  <option>Emprestar</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-lg px-4 py-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-500"
                >
                  Adicionar jogador
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppShell>
  );
}