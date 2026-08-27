"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { PlayerTable } from "@/components/squad/PlayerTable";
import { SquadFilters } from "@/components/squad/SquadFilters";
import { PlayerForm } from "@/components/squad/PlayerForm";
import { Player } from "@/types/player";

const initialPlayers: Player[] = [
  {
    id: 1,
    name: "Passarelli",
    position: "Goleiro",
    age: 28,
    role: "Titular",
    contractEnd: "2029",
    status: "Renovar",
  },
  {
    id: 2,
    name: "Titi",
    position: "Zagueiro",
    age: 27,
    role: "Titular",
    contractEnd: "2029",
    status: "Renovar",
  },
  {
    id: 3,
    name: "Rafael",
    position: "Zagueiro",
    age: 25,
    role: "Titular",
    contractEnd: "2030",
    status: "OK",
  },
  {
    id: 4,
    name: "Naranjo",
    position: "Meio Campo",
    age: 24,
    role: "Titular",
    contractEnd: "2029",
    status: "Renovar",
  },
  {
    id: 5,
    name: "Paulinho",
    position: "Meio Atacante",
    age: 26,
    role: "Titular",
    contractEnd: "2030",
    status: "OK",
  },
  {
    id: 6,
    name: "Lucca Drummond",
    position: "Atacante",
    age: 27,
    role: "Titular",
    contractEnd: "2030",
    status: "OK",
  },
];

export default function SquadPage() {
  const [players, setPlayers] =
    useState<Player[]>(initialPlayers);

  const [search, setSearch] = useState("");

  const [positionFilter, setPositionFilter] =
    useState("Todos");

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPosition =
      positionFilter === "Todos" ||
      player.position === positionFilter;

    return matchesSearch && matchesPosition;
  });

  function handleAddPlayer(player: Player) {
    setPlayers((currentPlayers) => [
      ...currentPlayers,
      player,
    ]);

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

      <SquadFilters
        search={search}
        positionFilter={positionFilter}
        onSearchChange={setSearch}
        onPositionChange={setPositionFilter}
      />

      <PlayerTable players={filteredPlayers} />

      {isFormOpen && (
        <PlayerForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddPlayer}
        />
      )}
    </AppShell>
  );
}