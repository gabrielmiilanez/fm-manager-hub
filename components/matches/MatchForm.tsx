"use client";

import { useState } from "react";
import {
  Match,
  MatchLocation,
} from "@/types/match";

interface MatchFormProps {
  onClose: () => void;
  onSubmit: (match: Match) => void;
}

const locations: MatchLocation[] = [
  "Casa",
  "Fora",
  "Neutro",
];

export function MatchForm({
  onClose,
  onSubmit,
}: MatchFormProps) {
  const [date, setDate] = useState("");
  const [competition, setCompetition] =
    useState("");
  const [opponent, setOpponent] =
    useState("");

  const [location, setLocation] =
    useState<MatchLocation>("Casa");

  const [goalsFor, setGoalsFor] =
    useState("");

  const [goalsAgainst, setGoalsAgainst] =
    useState("");

  const [error, setError] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!date) {
      setError("Informe a data da partida.");
      return;
    }

    if (!competition.trim()) {
      setError("Informe a competição.");
      return;
    }

    if (!opponent.trim()) {
      setError("Informe o adversário.");
      return;
    }

    if (
      goalsFor === "" ||
      goalsAgainst === ""
    ) {
      setError("Informe o placar da partida.");
      return;
    }

    const newMatch: Match = {
      id: Date.now(),
      date,
      competition: competition.trim(),
      opponent: opponent.trim(),
      location,
      goalsFor: Number(goalsFor),
      goalsAgainst: Number(goalsAgainst),
    };

    onSubmit(newMatch);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        
        {/* Cabeçalho */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Novo jogo
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Registre uma partida da temporada.
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
          {/* Data */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Data
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setError("");
              }}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Competição */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Competição
            </label>

            <input
              type="text"
              value={competition}
              onChange={(e) => {
                setCompetition(e.target.value);
                setError("");
              }}
              placeholder="Ex.: Campeonato Brasileiro"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Adversário */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Adversário
            </label>

            <input
              type="text"
              value={opponent}
              onChange={(e) => {
                setOpponent(e.target.value);
                setError("");
              }}
              placeholder="Nome do adversário"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Local */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Local
            </label>

            <select
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value as MatchLocation
                )
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            >
              {locations.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Placar */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Placar
            </label>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                value={goalsFor}
                onChange={(e) => {
                  setGoalsFor(e.target.value);
                  setError("");
                }}
                placeholder="Nós"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-center text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <span className="text-slate-500">
                ×
              </span>

              <input
                type="number"
                min="0"
                value={goalsAgainst}
                onChange={(e) => {
                  setGoalsAgainst(e.target.value);
                  setError("");
                }}
                placeholder="Adversário"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-center text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>
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
              Adicionar jogo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}