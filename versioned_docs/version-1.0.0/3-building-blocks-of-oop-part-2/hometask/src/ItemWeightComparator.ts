import {ItemComparator} from "./ItemComparator";
import {Item} from './Item';

export interface ItemWeightComparator extends ItemComparator {
    compare(first: Item, second: Item): number;
}