import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRouterModule } from '../routes';
import { ComponentsModule } from '../components/components.module';
import { AddingPagesComponent } from './adding-pages/adding-pages.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    AppRouterModule,
    ComponentsModule,
  ],
  declarations: [HomeComponent, ContactComponent, AddingPagesComponent, LoginComponent]
})
export class PagesModule { }
