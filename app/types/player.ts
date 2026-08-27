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
  // Identificação
  id: number;
  name: string;
  fullName?: string;
  nationality?: string;
  photo?: string;

  // Informações esportivas
  position: string;
  secondaryPositions?: string[];
  age: number;

  // Gestão do elenco
  role: PlayerRole;
  status: PlayerStatus;

  // Contrato
  contractEnd: string;
  salary?: string;

  // Estatísticas da temporada
  appearances?: number;
  goals?: number;
  assists?: number;
  averageRating?: number;

  // Informações extras
  notes?: string;
};