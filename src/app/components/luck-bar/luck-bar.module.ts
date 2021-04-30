import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckBarComponent } from './luck-bar.component';



@NgModule({
    declarations: [
        LuckBarComponent
    ],
    exports: [
        LuckBarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LuckBarModule { }
