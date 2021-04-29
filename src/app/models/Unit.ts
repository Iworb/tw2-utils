import { Cost } from './Cost';

export enum UnitType {
  Spearman = 'spearman',
  Swordsman = 'swordsman',
  Axeman = 'axeman',
  Archer = 'archer',
  LightCavalry = 'light_cavalry',
  MountedArcher = 'mounted_archer',
  HeavyCavalry = 'heavy_cavalry',
  Ram = 'ram',
  Catapult = 'catapult',
  Berserker = 'berserker',
  Trebuchet = 'trebuchet',
  Snob = 'snob',
  Knight = 'knight',
}

export enum UnitGroup {
  Infantry = 'infantry',
  Cavalry = 'cavalry',
  Archer = 'archer'
}

export class Unit {
  type: UnitType;
  cost: Cost;
  attack: number;
  defence: {
    infantry: number;
    cavalry: number;
    archer: number;
  };
  points: {
    attack: number;
    defence: number;
  };
  speed: number;
  capacity: number;
  group: UnitGroup;
}
