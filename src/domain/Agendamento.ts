import type { Entity } from "./Entity";

export interface Agendamento extends Entity {
  clienteId: string;
  servico: string;
  dataHora: Date;
  observacoes?: string;
}
