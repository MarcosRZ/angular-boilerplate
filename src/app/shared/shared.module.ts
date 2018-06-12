import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './table-layout/table-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TableLayoutComponent
  ],
  declarations: [TableLayoutComponent]
})
export class SharedModule { }
