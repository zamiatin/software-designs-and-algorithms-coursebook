import {Item} from './Item';
export abstract class Consumable extends Item {
    isConsumed: boolean;

    constructor(name: string, value: number, weight: number, private spoiled: boolean) {
        super(name, value, weight);
    }

    isSpoiled(): boolean {
        return this.spoiled;
    }

    use(): string {
        if (this.isConsumed) {
            return `There's nothing left of the ${this.name} to consume.`;
        } else {
            this.isConsumed = true;
            return `You consumed the ${this.name}.` + (this.spoiled ? '\nYou feel sick.' : '');
        }
    }
}