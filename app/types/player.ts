export type PlayerRole =
  | "Titular"
  | "Rotação"
  | "Reserva"
  | "Promessa"
  | "Emprestado"
  | "Afastado";

export type PlayerStatus =
  | "OK"
  | "Renovar"
  | "Vender"
  | "Emprestar"
  | "Dispensar";

export type Player = {
  id: number;
  name: string;
  position: string;
  age: number;
  role: PlayerRole;
  contractEnd: string;
  status: PlayerStatus;
};