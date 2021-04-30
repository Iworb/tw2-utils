import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { units } from '../data/units';
import { OfficerType } from '../models/Officer';

enum BattleResult {
  Defeat = 'defeat',
  VictoryLossless = 'victoryLossless',
  Victory = 'victory',
}

@Component({
  selector: 'tw2-battle-dialog',
  templateUrl: './battle-dialog.component.html',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.twx-window]': 'true'
  },
  styleUrls: ['./battle-dialog.component.scss']
})
export class BattleDialogComponent implements OnInit {

  ctx$: Observable<{
    attackModifier: number,
    defendModifier: number,
    result: BattleResult,
  }>;
  form: FormGroup;
  officersValues = Object.values(OfficerType);
  officers: {[key in OfficerType]: boolean} = this.officersValues.reduce((acc, k) => ({ ...acc, [k]: false }), {} as any);
  OfficerType = OfficerType;
  units = units;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      attacker: fb.group(units.reduce((acc, unit) => ({ ...acc, [unit.type]: [] }), {})),
      defender: fb.group(units.reduce((acc, unit) => ({ ...acc, [unit.type]: [] }), {})),
      luck: [0],
      morale: [100]
    });
    this.ctx$ = of({
      attackModifier: 50,
      defendModifier: 50,
      result: BattleResult.Victory,
    });
  }

  ngOnInit(): void {
  }

}
