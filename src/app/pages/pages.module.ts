import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRouterModule } from '../routes';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule,
    ComponentsModule,
  ],
  declarations: [HomeComponent, ContactComponent]
})
export class PagesModule { }
