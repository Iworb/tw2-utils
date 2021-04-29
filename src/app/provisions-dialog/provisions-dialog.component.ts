/* tslint:disable:no-host-metadata-property */
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { buildingsMap } from '../data/buildings';
import { Building, Cost, BuildingType } from '../models';

interface ProvisionsResult extends Cost {
  points: number;
  totalProvisions: number;
  leftProvisions: number;
  leftProvisions1: number;
  leftProvisions2: number;
}

@Component({
  selector: 'tw2-provisions-dialog',
  templateUrl: './provisions-dialog.component.html',
  host: {
    '[class.twx-window]': 'true'
  },
  styleUrls: ['./provisions-dialog.component.scss']
})
export class ProvisionsDialogComponent implements OnInit, OnDestroy {

  order = [
    BuildingType.Headquarter,
    BuildingType.TimberCamp,
    BuildingType.ClayPit,
    BuildingType.IronMine,
    BuildingType.Farm,
    BuildingType.Warehouse,
    BuildingType.Church,
    BuildingType.Chapel,
    BuildingType.RallyPoint,
    BuildingType.Barracks,
    BuildingType.Statue,
    BuildingType.Hospital,
    BuildingType.Wall,
    BuildingType.Market,
    BuildingType.Tavern,
    BuildingType.Academy,
    BuildingType.HallOfOrders,
  ];
  buildings = this.order.map((type) => buildingsMap[type]);
  form: FormGroup;
  ctx$: Observable<{
    results: ProvisionsResult
  }>;
  destroyed$ = new Subject();

  farmFormatter = (value: number, max?: number) => `${value} / ${max}`;
  resourceFormatter = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  timeFormatter = (seconds) => {
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return [
      d,
      h,
      m > 9 ? m : (h ? '0' + m : m || '0'),
      s > 9 ? s : '0' + s
    ].filter((v, i, arr) => i === 0 ? v > 0 : v > 0 || arr[i - 1] > 0).join(':');
  };

  constructor(
    fb: FormBuilder,
  ) {
    type BuildingsMap = { [key in BuildingType]?: number };
    this.form = fb.group(this.order.reduce((acc, curr) => ({ ...acc, [curr]: [0] }), {}));
    const bs$ = new BehaviorSubject<BuildingsMap>(null);
    const results$ = bs$.asObservable().pipe(
      map((val: BuildingsMap) => {
        const res: ProvisionsResult = {
          provisions: 0,
          clay: 0,
          iron: 0,
          points: 0,
          wood: 0,
          totalProvisions: 0,
          leftProvisions: 0,
          leftProvisions1: 0,
          leftProvisions2: 0,
          time: 0,
        };
        if (val) {
          for (const [type, v] of Object.entries(val)) {
            const b: Building = buildingsMap[type];
            const levels = b.levels.slice(0, v);
            for (const level of levels) {
              res.wood += level.cost.wood;
              res.iron += level.cost.iron;
              res.clay += level.cost.clay;
              res.provisions += level.cost.provisions;
              res.time += level.cost.time;
            }
            res.points += levels.length ? levels[levels.length - 1].pts : 0;
            if (b.type === BuildingType.Farm) {
              res.totalProvisions = levels.length ? levels[levels.length - 1].value : 0;
            }
          }
          res.leftProvisions = res.totalProvisions - res.provisions;
          res.leftProvisions1 = Math.ceil(res.leftProvisions * 1.1);
          res.leftProvisions2 = Math.ceil(res.leftProvisions * 1.2);
        }
        return res;
      }),
    );
    this.ctx$ = combineLatest([results$]).pipe(
      map(([results]) => ({ results }))
    );
    this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(v => bs$.next(v));
  }

  ngOnInit(): void {
    const report = document.querySelector('.tbl-border-light.border-thin:not(.ng-hide)[ng-show="report[type].buildings"]');
    const headquarters = document.querySelector('.building-headquarter');
    let value;
    if (report) {
      const levels = Array.from(report.querySelectorAll('tr td.cell-center')).map(l => parseInt(l.innerHTML, 10));
      value = this.order.reduce((acc, curr, i) => ({ ...acc, [curr]: levels[i] }), {});
    }
    if (headquarters) {
      const buildings = headquarters.querySelectorAll('.tbl-unit');
      value = {};
      (buildings ?? []).forEach((b) => {
        const typeDiv = b.querySelector('.ff-cell-fix div');
        const type = Array.from<string>(typeDiv.classList)[0].split('-').pop();
        value[type] = parseInt(b.querySelector('.building-level-head span:first-of-type').innerText, 10);
      });
    }
    this.form.patchValue(value);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
