import type { Repository } from "../core/Repository";
import type { Cliente } from "../domain/Cliente";

export class ClienteService {
  private readonly repo;
  constructor(repo: Repository<Cliente>) {
    this.repo = repo;
  }

  criarCliente(dados: Omit<Cliente, "id" | "dataCadastro">): Cliente {
    const todos = this.repo.getAll();
    const existe = todos.find((c) => c.telefone === dados.telefone);
    if (existe) {
      throw new Error("Ja existe um cliente com este telefone!");
    }

    const novoCliente: Cliente = {
      id: crypto.randomUUID(),
      dataCadastro: new Date(),
      ...dados,
    };

    this.repo.add(novoCliente);
    return novoCliente;
  }

  listarClientes(): Cliente[] {
    return this.repo.getAll();
  }

  removerCliente(id: string): void {
    this.repo.remove(id);
  }
}
