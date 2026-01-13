import type { Entity } from "../domain/Entity";

export class Repository<T extends Entity> {
  private items: T[] = [];
  private readonly storageKey;
  constructor(storageKey: string) {
    this.storageKey = "storageKey";
  }

  add(item: T): void {
    this.items.push(item);
    console.log(`[${this.storageKey}] Item adicionado: `, item);
  }

  remove(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
    console.log(`[${this.storageKey}] Item removido: ${id}`);
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  update(item: T): void {
    this.items = this.items.map((i) => (i.id === item.id ? item : i));
    console.log(`[${this.storageKey}] Item atualizado:`, item);
  }
}
