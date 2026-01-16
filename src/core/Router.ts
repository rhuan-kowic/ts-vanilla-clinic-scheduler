type RouteHandler = () => void;

export class Router {
  private routes: Record<string, RouteHandler> = {};

  constructor() {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }

  add(path: string, handler: RouteHandler) {
    this.routes[path] = handler;
  }

  private handleRoute() {
    const hash = window.location.hash.slice(1) || "clientes";
    const handler = this.routes[hash];

    if (handler) {
      handler();
      this.updateActiveLink(hash);
    } else {
      console.warn("Rota não encontrada:", hash);
    }
  }

  private updateActiveLink(hash: string) {
    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${hash}`) {
        link.classList.add("active");
      }
    });
  }
}
