import {Consumable} from "./Consumable";

export class Pizza extends Consumable {
    private numberOfEatenSlices: number = 0;
    constructor(value: number, weight: number, spoiled: boolean, readonly numberOfSlices: number = 0) {
        super('pizza', value, weight, spoiled);
    }

    getNumberOfEatenSlices(): number {
        return this.numberOfEatenSlices;
    }

    use() {
        if (this.numberOfEatenSlices >= this.numberOfSlices) {
            return `There's nothing left of the ${this.name} to consume.`;
        } else {
            this.numberOfEatenSlices++;
            return "You consumed a slice of the pizza.";
        }
    }
}