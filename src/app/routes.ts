import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './pages/private/private.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddingPagesComponent } from './pages/adding-pages/adding-pages.component';
import { AuthGuard } from './guards/authGuard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'adding-pages', component: AddingPagesComponent }
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

export const AppRouterModule = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
);
