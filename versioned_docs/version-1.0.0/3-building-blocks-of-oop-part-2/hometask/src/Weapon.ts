import {Item} from "./Item";

export abstract class Weapon extends Item {
    static MODIFIER_CHANGE_RATE: number = .05;
    protected damageModifier: number = 0;
    protected durabilityModifier: number = 0;
    private broken: boolean = false;
    constructor(public name: string, protected baseDamage: number, private baseDurability: number,  public value: number, public weight: number) {
        super(name, value, weight);
    }

    polish(): void {}
    getEffectiveDamage(): number {
        return this.baseDamage + this.damageModifier;
    }
    getEffectiveDurability(durabilityModifier: number = this.durabilityModifier): number {
        return this.baseDurability + durabilityModifier;
    }
    toString(): string {
        const damage = this.getEffectiveDamage().toFixed(2);
        const durability = (this.getEffectiveDurability() * 100).toFixed(2);
        return (
            super.toString() + `, Damage: ${damage}, Durability: ${durability}%`
        );
    }

    use(): string {
        if (this.broken) {
            return `You can't use the ${this.name}, it is broken.`;
        }

        this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
        if (this.getEffectiveDurability() <= 0) {
            this.broken = true;
            return `You use the ${this.name}, dealing ${
                Weapon.MODIFIER_CHANGE_RATE
            } points of damage. The ${this.name} breaks.`;
        }
        return `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
    }


}