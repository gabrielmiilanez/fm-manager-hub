"use client";

import { useState } from "react";
import {
  Player,
  PlayerRole,
  PlayerStatus,
} from "@/types/player";

interface PlayerFormProps {
  player?: Player;
  onClose: () => void;
  onSubmit: (player: Player) => void;
}

const positions = [
  "Goleiro",
  "Zagueiro",
  "Lateral Direito",
  "Lateral Esquerdo",
  "Volante",
  "Meio Campo",
  "Meia Esquerda",
  "Meia Direita",
  "Meio Atacante",
  "Ponta Esquerda",
  "Ponta Direita",
  "Atacante",
];

const roles: PlayerRole[] = [
  "Titular",
  "Rotação",
  "Reserva",
  "Promessa",
  "Emprestado",
  "Afastado",
];

const statuses: PlayerStatus[] = [
  "OK",
  "Renovar",
  "Vender",
  "Emprestar",
  "Dispensar",
];

export function PlayerForm({
  player,
  onClose,
  onSubmit,
}: PlayerFormProps) {
  const isEditing = Boolean(player);

  const [name, setName] = useState(
    player?.name ?? ""
  );

  const [position, setPosition] = useState(
    player?.position ?? "PL"
  );

  const [age, setAge] = useState(
    player?.age?.toString() ?? ""
  );

  const [role, setRole] =
    useState<PlayerRole>(
      player?.role ?? "Reserva"
    );

  const [contractEnd, setContractEnd] =
    useState(
      player?.contractEnd === "Não informado"
        ? ""
        : player?.contractEnd ?? ""
    );

  const [status, setStatus] =
    useState<PlayerStatus>(
      player?.status ?? "OK"
    );

  const [error, setError] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim()) {
      setError("Informe o nome do jogador.");
      return;
    }

    if (!age || Number(age) <= 0) {
      setError("Informe uma idade válida.");
      return;
    }

    const updatedPlayer: Player = {
      id: player?.id ?? Date.now(),
      name: name.trim(),
      position,
      age: Number(age),
      role,
      contractEnd:
        contractEnd.trim() || "Não informado",
      status,
    };

    onSubmit(updatedPlayer);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

        {/* Cabeçalho */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">
              {isEditing
                ? "Editar jogador"
                : "Novo jogador"}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {isEditing
                ? "Atualize as informações do jogador."
                : "Adicione um jogador ao seu elenco."}
            </p>
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

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Nome */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Nome
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Nome do jogador"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Posição e idade */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Posição
              </label>

              <select
                value={position}
                onChange={(e) =>
                  setPosition(e.target.value)
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              >
                {positions.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
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
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setError("");
                }}
                placeholder="Ex.: 24"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Papel */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Papel no elenco
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value as PlayerRole
                )
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            >
              {roles.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Contrato */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Contrato até
            </label>

            <input
              type="text"
              value={contractEnd}
              onChange={(e) =>
                setContractEnd(e.target.value)
              }
              placeholder="Ex.: 2030"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Situação */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Situação
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as PlayerStatus
                )
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            >
              {statuses.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Erro */}
          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Botões */}
          <div className="flex justify-end gap-3 border-t border-slate-800 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-500"
            >
              {isEditing
                ? "Salvar alterações"
                : "Adicionar jogador"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}