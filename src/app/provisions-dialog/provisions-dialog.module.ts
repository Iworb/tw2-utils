import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressBarModule } from '../components/progress-bar/progress-bar.module';
import { MaterialModule } from '../material.module';
import { ProvisionsDialogComponent } from './provisions-dialog.component';

@NgModule({
  declarations: [
    ProvisionsDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProgressBarModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class ProvisionsDialogModule {}
