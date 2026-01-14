export abstract class Component<T> {
  protected hostElement: HTMLElement;
  constructor(hostId: string) {
    const el = document.getElementById(hostId);
    if (el) {
      this.hostElement = el;
    } else {
      throw new Error(`Elemento com id '${hostId}' não encontrado!`);
    }
  }

  abstract render(data: T): void;
}
