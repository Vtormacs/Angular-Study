import { Routes } from '@angular/router';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventos', component: EventosListComponent },
];
