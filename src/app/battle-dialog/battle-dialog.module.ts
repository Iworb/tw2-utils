import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { BattleDialogComponent } from './battle-dialog.component';

@NgModule({
  declarations: [
    BattleDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class BattleDialogModule {}
