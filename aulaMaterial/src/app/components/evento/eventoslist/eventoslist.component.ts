import { Component } from '@angular/core';
import { CardEventoComponent } from "../card-evento/card-evento.component";

@Component({
  selector: 'app-eventoslist',
  standalone: true,
  imports: [CardEventoComponent],
  templateUrl: './eventoslist.component.html',
  styleUrl: './eventoslist.component.scss'
})
export class EventoslistComponent {

}
