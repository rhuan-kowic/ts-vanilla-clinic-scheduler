import { Component } from "../core/Component";
import type { Cliente } from "../domain/Cliente";

export class ClienteList extends Component<Cliente[]> {
  constructor(hostId: string) {
    super(hostId);
  }

  render(clientes: Cliente[]): void {
    this.hostElement.innerHTML = "";

    if (clientes.length === 0) {
      this.hostElement.innerHTML =
        "<p class='empty-state'>Nenhum cliente cadastrado.</p>";
      return;
    }

    clientes.forEach((cliente) => {
      const card = document.createElement("div");
      card.className = "cliente-card";
      card.innerHTML = `
        <div class="info">
          <strong>${cliente.nome}</strong>
          <span>${cliente.telefone}</strong>
        </div>
        <small>ID: ${cliente.id}</small>
      `;
      this.hostElement.appendChild(card);
    });
  }
}
