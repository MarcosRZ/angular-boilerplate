import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { AppRouterModule } from '../routes';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule,
  ],
  exports: [ExampleComponent],
  declarations: [ExampleComponent]
})
export class ComponentsModule { }
