import type { Entity } from "./Entity";

export interface Cliente extends Entity {
  nome: string;
  telefone: string;
  email: string;
  dataCadastro: Date;
}
