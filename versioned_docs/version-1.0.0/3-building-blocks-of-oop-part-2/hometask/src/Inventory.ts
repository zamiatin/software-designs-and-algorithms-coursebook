import {Item} from './Item';
import {ItemComparator} from "./ItemComparator";

export class Inventory implements ItemComparator {
    items: Item[] = [];

    constructor() {}

    addItem(item: Item) {
        this.items.push(item);
    }

    compare(first: Item, second: Item): number {
        if (first.weight > second.weight) return 1;
        if (first.weight < second.weight) return -1;

        return this.items[0].compareTo(first);
    }

    sort(comparator?: ItemComparator) {
        this.items.sort((a, b) => comparator ? comparator.compare(a, b) : a.compareTo(b));
    }

    toString(): string { return this.items.join(', ');}
}