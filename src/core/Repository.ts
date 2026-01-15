import type { Entity } from "../domain/Entity";

export class Repository<T extends Entity> {
  private items: T[] = [];
  private readonly storageKey;
  constructor(storageKey: string) {
    this.storageKey = storageKey;
    this.load();
  }

  add(item: T): void {
    this.items.push(item);
    this.save();
  }

  remove(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
    this.save();
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  update(item: T): void {
    this.items = this.items.map((i) => (i.id === item.id ? item : i));
    this.save();
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  private load(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.items = JSON.parse(data);
    }
  }
}
