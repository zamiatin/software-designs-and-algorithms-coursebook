import { Point } from "./Point";

export abstract class Shape {
  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(protected points: Point[], protected color: string = 'green', protected filled: boolean = true) {
    if (points && points.length < 3) throw new Error('Shape must have at least 3 points');
  }
  abstract getType(): string;

  toString(): string {
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.join(', ')}.`;
  }

  getPerimeter(): number {
    return this.points.reduce((acc, cur, i, arr) => acc + cur.distance(arr[(i + 1) % arr.length]), 0);
  }
}

