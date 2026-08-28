export type MatchLocation =
  | "Casa"
  | "Fora"
  | "Neutro";

export type Match = {
  id: number;

  date: string;

  competition: string;

  opponent: string;

  location: MatchLocation;

  goalsFor: number;

  goalsAgainst: number;
};