import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from '../routes';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule,
  ],
  exports: [NavbarComponent, FooterComponent],
  declarations: [NavbarComponent, FooterComponent]
})
export class CoreModule { }
