import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Evento } from '../../models/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos-list',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './eventos-list.component.html',
  styleUrl: './eventos-list.component.scss',
})
export class EventosListComponent {
  lista: Evento[] = [];

  constructor(){
    let evento: Evento = new Evento();
    evento.id = 1;
    evento.nome = "Show";
    evento.precoDoIngresso = 100.00;

    let evento2: Evento = new Evento();
    evento2.id = 2;
    evento2.nome = 'Show2';
    evento2.precoDoIngresso = 100.0;

    let evento3: Evento = new Evento();
    evento3.id = 3;
    evento3.nome = 'Show3';
    evento3.precoDoIngresso = 100.0;

    this.lista.push(evento);
    this.lista.push(evento2);
    this.lista.push(evento3);
  }
}
