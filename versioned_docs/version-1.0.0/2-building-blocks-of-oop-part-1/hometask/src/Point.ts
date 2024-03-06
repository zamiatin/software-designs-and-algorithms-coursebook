export class Point {
    x: number;
    y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(point?: number | Point, y?: number): number {
        if (point instanceof Point) {
            return this.distance(point.x, point.y);
        }

        if (typeof point === 'undefined' && typeof y === 'undefined') {
            return this.distance(0,0);
        }

        const dx: number = this.x - point;
        const dy: number = this.y - y;

        return Math.round(Math.sqrt(dx ** 2 + dy ** 2));
    }
}