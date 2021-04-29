import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
  MatDialogModule,
  MatTooltipModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
