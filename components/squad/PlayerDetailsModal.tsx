"use client";

import { Player } from "@/app/types/player";

interface PlayerDetailsModalProps {
  player: Player;
  onClose: () => void;
}

export function PlayerDetailsModal({
  player,
  onClose,
}: PlayerDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        
        {/* Cabeçalho */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Perfil do jogador
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              {player.name}
            </h2>

            {player.fullName && (
              <p className="mt-1 text-slate-400">
                {player.fullName}
              </p>
            )}
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

        {/* Informações principais */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          <InfoCard
            label="Posição"
            value={player.position}
          />

          <InfoCard
            label="Idade"
            value={`${player.age} anos`}
          />

          <InfoCard
            label="Nacionalidade"
            value={player.nationality || "Não informado"}
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

          <InfoCard
            label="Salário"
            value={player.salary || "Não informado"}
          />

          <InfoCard
            label="Posições secundárias"
            value={
              player.secondaryPositions?.join(", ") ||
              "Não informado"
            }
          />
        </div>

        {/* Estatísticas */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">
            Estatísticas da temporada
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Jogos"
              value={player.appearances ?? 0}
            />

            <StatCard
              label="Gols"
              value={player.goals ?? 0}
            />

            <StatCard
              label="Assistências"
              value={player.assists ?? 0}
            />

            <StatCard
              label="Média"
              value={
                player.averageRating?.toFixed(2) ??
                "0.00"
              }
            />
          </div>
        </div>

        {/* Observações */}
        <div className="mt-8">
          <h3 className="mb-3 text-lg font-semibold">
            Observações
          </h3>

          <div className="min-h-24 rounded-lg border border-slate-800 bg-slate-950 p-4 text-slate-300">
            {player.notes || "Nenhuma observação registrada."}
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-8 flex justify-end border-t border-slate-800 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-5 py-2 font-medium transition hover:bg-slate-700"
          >
            Fechar
          </button>
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

interface StatCardProps {
  label: string;
  value: string | number;
}

function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 text-center">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}