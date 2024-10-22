import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { EventoslistComponent } from './components/evento/eventoslist/eventoslist.component';
import { EventosdetailsComponent } from './components/evento/eventosdetails/eventosdetails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      { path: 'eventos', component: EventoslistComponent },
      { path: 'eventos/new', component: EventosdetailsComponent },
      { path: 'eventos/edit/:id', component: EventosdetailsComponent },
    ],
  },
];
