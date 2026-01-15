import "./styles.css";
import { Repository } from "./core/Repository";
import { type Cliente } from "./domain/Cliente";
import { ClienteList } from "./components/ClienteList";
import { ClienteService } from "./services/ClienteService"; 

const clienteRepo = new Repository<Cliente>("beauty_clientes_v1");
const clienteService = new ClienteService(clienteRepo); 
const clienteListComponent = new ClienteList("cliente-list-app");

const form = document.getElementById("form-cliente") as HTMLFormElement;
const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputTel = document.getElementById("telefone") as HTMLInputElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;

function atualizarTela() {
  const dados = clienteService.listarClientes();
  clienteListComponent.render(dados);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    clienteService.criarCliente({
      nome: inputNome.value,
      telefone: inputTel.value,
      email: inputEmail.value
    });

    atualizarTela();
    form.reset();
    inputNome.focus();

  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
});

atualizarTela();