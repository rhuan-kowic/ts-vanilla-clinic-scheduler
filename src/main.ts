import { Repository } from "./core/Repository";
import type { Cliente } from "./domain/Cliente";
import type { Agendamento } from "./domain/Agendamento";

const clienteRepo = new Repository<Cliente>("clientes");
const agendaRepo = new Repository<Agendamento>("agendamentos");

const gerarId = () => Math.random().toString(36).substr(2, 9);

// --- TESTE CLIENTES ---
console.log("--- 👩 TESTE DE CLIENTES ---");

const cliente1: Cliente = {
  id: gerarId(),
  nome: "Ana Silva",
  telefone: "3199999999",
  email: "ana@email.com",
  dataCadastro: new Date()
};

clienteRepo.add(cliente1);
console.log("Todos os clientes:", clienteRepo.getAll());

// --- TESTE AGENDAMENTO ---
console.log("\n--- 📅 TESTE DE AGENDAMENTOS ---");

const agendamento1: Agendamento = {
  id: gerarId(),
  clienteId: cliente1.id,
  servico: "Limpeza de Pele",
  dataHora: new Date("2026-01-20T14:00:00"),
};

agendaRepo.add(agendamento1);
console.log("Agenda completa:", agendaRepo.getAll());