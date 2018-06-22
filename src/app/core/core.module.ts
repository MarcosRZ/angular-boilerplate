import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from '../routes';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    AppRouterModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [NavbarComponent, FooterComponent, FormsModule],
  declarations: [NavbarComponent, FooterComponent]
})
export class CoreModule { }
