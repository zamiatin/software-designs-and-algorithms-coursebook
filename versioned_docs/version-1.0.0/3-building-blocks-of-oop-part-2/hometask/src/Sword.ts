import {Weapon} from './Weapon';
export class Sword extends Weapon {
    static readonly MAX_DAMAGE_MODIFIER: number = 0.25;
    static readonly MODIFIER_CHANGE_RATE: number = 0.05;

    constructor(value: number, weight: number, baseDamage: number, baseDurability: number = 0) {
        super('sword', value, weight, baseDamage, baseDurability);
    }

    polish() {
        if (this.damageModifier < Sword.MAX_DAMAGE_MODIFIER) {
            this.damageModifier += Sword.MODIFIER_CHANGE_RATE;
            if (this.damageModifier > Sword.MAX_DAMAGE_MODIFIER) {
                this.damageModifier = Math.min(this.damageModifier, Sword.MAX_DAMAGE_MODIFIER)
            }
        }
    }
}