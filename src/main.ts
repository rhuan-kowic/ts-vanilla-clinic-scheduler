import "./styles.css";

import { Repository } from "./core/Repository";
import type { Cliente } from "./domain/Cliente";
import type { Agendamento } from "./domain/Agendamento";
import { ClienteList } from "./components/ClienteList";

const clienteRepo = new Repository<Cliente>("clientes");

const clienteListComponent = new ClienteList("cliente-list-app");

function atualizarTela() {
  const dados = clienteRepo.getAll();
  clienteListComponent.render(dados);
}


const form = document.getElementById("form-cliente") as HTMLFormElement;
const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputTel = document.getElementById("telefone") as HTMLInputElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const novoCliente: Cliente = {
    id: crypto.randomUUID(), 
    nome: inputNome.value,
    telefone: inputTel.value,
    email: inputEmail.value,
    dataCadastro: new Date()
  };
  
  clienteRepo.add(novoCliente);
  atualizarTela();
  form.reset();
});

atualizarTela();