import { Cost } from './Cost';

export interface BuildingLevel {
  cost: Cost;
  value?: number;
  hp: number;
  pts: number;
}
