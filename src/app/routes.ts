import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'example', component: ExampleComponent },
    { path: 'contact', component: ContactComponent },
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