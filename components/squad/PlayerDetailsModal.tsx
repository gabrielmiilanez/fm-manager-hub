"use client";

import { Player } from "@/types/player";

interface PlayerDetailsModalProps {
  player: Player;
  onClose: () => void;
  onEdit: (player: Player) => void;
  onDelete: (player: Player) => void;
}

export function PlayerDetailsModal({
  player,
  onClose,
  onEdit,
  onDelete,
}: PlayerDetailsModalProps) {
  function handleDelete() {
    const confirmed = window.confirm(
      `Tem certeza que deseja remover ${player.name} do elenco?`
    );

    if (!confirmed) {
      return;
    }

    onDelete(player);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        {/* Cabeçalho */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Perfil do jogador
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              {player.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-xl text-slate-400 transition hover:bg-slate-800 hover:text-white"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {/* Informações */}
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard
            label="Posição"
            value={player.position}
          />

          <InfoCard
            label="Idade"
            value={`${player.age} anos`}
          />

          <InfoCard
            label="Papel no elenco"
            value={player.role}
          />

          <InfoCard
            label="Situação"
            value={player.status}
          />

          <InfoCard
            label="Contrato até"
            value={player.contractEnd}
          />
        </div>

        {/* Ações */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg border border-red-500/30 px-4 py-2 font-medium text-red-400 transition hover:bg-red-500/10"
          >
            🗑️ Excluir
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-slate-800 px-4 py-2 font-medium transition hover:bg-slate-700"
            >
              Fechar
            </button>

            <button
              type="button"
              onClick={() => onEdit(player)}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
            >
              ✏️ Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoCardProps {
  label: string;
  value: string;
}

function InfoCard({
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 font-medium text-white">
        {value}
      </p>
    </div>
  );
}