import "./styles.css";
import { Repository } from "./core/Repository";
import { type Cliente } from "./domain/Cliente";
import { ClienteList } from "./components/ClienteList";
import { ClienteService } from "./services/ClienteService";
import { Router } from "./core/Router"; // <--- Importar Router

const clienteRepo = new Repository<Cliente>("beauty_clientes_v1");
const clienteService = new ClienteService(clienteRepo);
const clienteListComponent = new ClienteList("cliente-list-app");

const viewClientes = document.getElementById("view-clientes") as HTMLDivElement;
const viewAgenda = document.getElementById("view-agenda") as HTMLDivElement;

function switchView(viewToShow: HTMLElement) {
  viewClientes.classList.add("hidden");
  viewAgenda.classList.add("hidden");

  viewToShow.classList.remove("hidden");
}

const router = new Router();

router.add("clientes", () => {
  switchView(viewClientes);
  const dados = clienteService.listarClientes();
  clienteListComponent.render(dados);
});

router.add("agenda", () => {
  switchView(viewAgenda);
  console.log("Bem-vindo à Agenda!");
});

const form = document.getElementById("form-cliente") as HTMLFormElement;
const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputTel = document.getElementById("telefone") as HTMLInputElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    clienteService.criarCliente({
      nome: inputNome.value,
      telefone: inputTel.value,
      email: inputEmail.value,
    });

    const dados = clienteService.listarClientes();
    clienteListComponent.render(dados);

    form.reset();
    alert("Cliente cadastrado!");
  } catch (error) {
    if (error instanceof Error) alert(error.message);
  }
});
