import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { EventoslistComponent } from './components/evento/eventoslist/eventoslist.component';
import { EventosdetailsComponent } from './components/evento/eventosdetails/eventosdetails.component';
import { CirculoComponent } from './components/categoria/circulo/circulo.component';
import { PaginaPrincipalComponent } from './components/layout/pagina-principal/pagina-principal.component';
import { InfoUsuarioComponent } from './components/layout/info-usuario/info-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'info-usuario', component: InfoUsuarioComponent },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      { path: 'categorias', component: CirculoComponent },
      { path: 'eventos', component: EventoslistComponent },
      { path: 'eventos/new', component: EventosdetailsComponent },
      { path: 'eventos/edit/:id', component: EventosdetailsComponent },
    ],
  },
];
