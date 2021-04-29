import { Component, OnInit } from '@angular/core';
import { OfficerType } from '../models/Officer';

@Component({
  selector: 'tw2-battle-dialog',
  templateUrl: './battle-dialog.component.html',
  styleUrls: ['./battle-dialog.component.scss']
})
export class BattleDialogComponent implements OnInit {

  officersKeys = Object.keys(OfficerType);
  officers = this.officersKeys.reduce((acc, k) => ({ ...acc, [k]: false }), {});
  OfficerType = OfficerType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
