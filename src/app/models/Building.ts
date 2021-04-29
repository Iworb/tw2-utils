import { BuildingLevel } from './BuildingLevel';

export interface Building {
  type: BuildingType;
  levels: BuildingLevel[];
  isCannotFullyDestroyed?: boolean;
  requiredHeadquartersLevel?: number;
}

export enum BuildingType {
  Headquarter = 'headquarter',
  TimberCamp = 'timber_camp',
  ClayPit = 'clay_pit',
  IronMine = 'iron_mine',
  Farm = 'farm',
  Warehouse = 'warehouse',
  Chapel = 'chapel',
  Church = 'church',
  RallyPoint = 'rally_point',
  Barracks = 'barracks',
  Statue = 'statue',
  Wall = 'wall',
  Hospital = 'hospital',
  Market = 'market',
  Tavern = 'tavern',
  Academy = 'academy',
  HallOfOrders = 'preceptory',
}
