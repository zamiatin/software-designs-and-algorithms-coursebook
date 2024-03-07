import {Shape} from './Shape';
import {Point} from './Point';

export class Triangle extends Shape {
    constructor(v1: Point, v2: Point, v3: Point);
    constructor(v1: Point, v2: Point, v3: Point, color: string, filled: boolean);

    constructor(
        private v1: Point,
        private v2: Point,
        private v3: Point,
        color: string = "green",
        filled: boolean = true
    ) {
        super([v1, v2, v3], color, filled);
    }

    toString(): string {
        return `Triangle[v1=${this.v1.toString()},v2=${this.v2.toString()},v3=${this.v3.toString()}]`;
    }

    getType(): string {
        const side1 = this.v1.distance(this.v2);
        const side2 = this.v2.distance(this.v3);
        const side3 = this.v3.distance(this.v1);

        if (side1 === side2 && side2 === side3) {
            return "equilateral triangle";
        }

        if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
            return "scalene triangle";
        }

        return "isosceles triangle";
    }
}