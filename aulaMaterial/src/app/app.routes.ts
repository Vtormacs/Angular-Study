import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { PaginaPrincipalComponent } from './components/layout/pagina-principal/pagina-principal.component';
import { InfoUsuarioComponent } from './components/layout/info-usuario/info-usuario.component';
import { ListaEventosAdminComponent } from './components/admin/lista-eventos-admin/lista-eventos-admin.component';
import { EventoDetailsAdminComponent } from './components/admin/evento-details-admin/evento-details-admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'info-usuario', component: InfoUsuarioComponent },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      { path: 'eventos', component: ListaEventosAdminComponent },
      { path: 'eventos/new', component: EventoDetailsAdminComponent },
      { path: 'eventos/edit/:id', component: EventoDetailsAdminComponent },
    ],
  },
];
