import { NgModule } from '@angular/core';
import { BattleDialogModule } from './battle-dialog/battle-dialog.module';
import { ProvisionsDialogModule } from './provisions-dialog/provisions-dialog.module';

const dialogs = [
  BattleDialogModule,
  ProvisionsDialogModule,
];

@NgModule({
  imports: dialogs,
  exports: dialogs,
})
export class DialogsModule { }
