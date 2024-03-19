import {Comparable} from './Comparable';

export abstract class Item implements Comparable<Item> {
   static idCounter: number = 0;
   readonly id: number = 0;
  constructor(readonly name: string, public value: number, public weight: number) {
      this.id = ++Item.idCounter;
  };

  compareTo(other: Item): number {
      if (this.value > other.value) return 1;
      if (this.value < other.value) return -1;
      if (this.name.toLowerCase() > other.name.toLowerCase())
          return 1;
      if (this.name.toLowerCase() < other.name.toLowerCase())
          return -1;
      return 0;
  }

  static resetIdCounter(): void {
      Item.idCounter = 0;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
  }

  abstract use() : void;
  getId(): number {
      return this.id;
  }
};