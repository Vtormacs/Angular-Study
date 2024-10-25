import { Component } from '@angular/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-info-usuario',
  standalone: true,
  imports: [RodapeComponent, MenuComponent],
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.scss',
})
export class InfoUsuarioComponent {}
