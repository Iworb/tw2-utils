import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LuckBarModule } from '../components/luck-bar/luck-bar.module';
import { ProgressBarModule } from '../components/progress-bar/progress-bar.module';
import { MaterialModule } from '../material.module';
import { BattleDialogComponent } from './battle-dialog.component';

@NgModule({
  declarations: [
    BattleDialogComponent
  ],
  imports: [
    CommonModule,
    LuckBarModule,
    MaterialModule,
    ProgressBarModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class BattleDialogModule {}
