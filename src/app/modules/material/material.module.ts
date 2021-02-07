import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatInputModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MomentDateModule]
})
export class MaterialModule { }
