"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { PlayerTable } from "@/components/squad/PlayerTable";
import { SquadFilters } from "@/components/squad/SquadFilters";
import { PlayerForm } from "@/components/squad/PlayerForm";
import { PlayerDetailsModal } from "@/components/squad/PlayerDetailsModal";
import { Player } from "@/types/player";

const STORAGE_KEY = "fm-manager-hub-players";

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
];

export default function SquadPage() {
  const [players, setPlayers] =
    useState<Player[]>(initialPlayers);

  const [hasLoadedPlayers, setHasLoadedPlayers] =
    useState(false);

  const [search, setSearch] = useState("");

  const [positionFilter, setPositionFilter] =
    useState("Todos");

  // Modal de adicionar
  const [isFormOpen, setIsFormOpen] =
    useState(false);

  // Jogador selecionado para visualizar detalhes
  const [selectedPlayer, setSelectedPlayer] =
    useState<Player | null>(null);

  // Jogador selecionado para edição
  const [editingPlayer, setEditingPlayer] =
    useState<Player | null>(null);

  // Carrega os jogadores salvos
  useEffect(() => {
    const savedPlayers =
      localStorage.getItem(STORAGE_KEY);

    if (savedPlayers) {
      try {
        const parsedPlayers =
          JSON.parse(savedPlayers);

        if (Array.isArray(parsedPlayers)) {
          setPlayers(parsedPlayers);
        }
      } catch (error) {
        console.error(
          "Erro ao carregar jogadores:",
          error
        );
      }
    }

    setHasLoadedPlayers(true);
  }, []);

  // Salva os jogadores sempre que houver alteração
  useEffect(() => {
    if (!hasLoadedPlayers) {
      return;
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(players)
    );
  }, [players, hasLoadedPlayers]);

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

  function handleUpdatePlayer(updatedPlayer: Player) {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player) =>
        player.id === updatedPlayer.id
          ? updatedPlayer
          : player
      )
    );

    setEditingPlayer(null);
  }

  function handleDeletePlayer(playerToDelete: Player) {
    setPlayers((currentPlayers) =>
      currentPlayers.filter(
        (player) => player.id !== playerToDelete.id
      )
    );

    setSelectedPlayer(null);
  }

  function handleEditPlayer(player: Player) {
    setSelectedPlayer(null);
    setEditingPlayer(player);
  }

  return (
    <AppShell>
      {/* Cabeçalho */}
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
      <SquadFilters
        search={search}
        positionFilter={positionFilter}
        onSearchChange={setSearch}
        onPositionChange={setPositionFilter}
      />

      {/* Tabela */}
      <PlayerTable
        players={filteredPlayers}
        onPlayerClick={setSelectedPlayer}
      />

      {/* Modal de adicionar */}
      {isFormOpen && (
        <PlayerForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddPlayer}
        />
      )}

      {/* Modal de detalhes */}
      {selectedPlayer && (
        <PlayerDetailsModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          onEdit={handleEditPlayer}
          onDelete={handleDeletePlayer}
        />
      )}

      {/* Modal de edição */}
      {editingPlayer && (
        <PlayerForm
          player={editingPlayer}
          onClose={() => setEditingPlayer(null)}
          onSubmit={handleUpdatePlayer}
        />
      )}
    </AppShell>
  );
}