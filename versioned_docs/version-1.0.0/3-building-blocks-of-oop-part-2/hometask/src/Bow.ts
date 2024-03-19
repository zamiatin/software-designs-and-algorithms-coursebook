import {Weapon} from './Weapon';
export class Bow extends Weapon {
    constructor(value: number, weight: number, baseDamage: number, baseDurability: number) {
        super('bow', value, weight, baseDamage, baseDurability);
    }

    polish() {
        const effectiveDurability = this.getEffectiveDurability();

        if (effectiveDurability < 1) {
            this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}
