import { Component } from '@angular/core';
import { Evento } from '../../../models/evento';
import { Endereco } from '../../../models/endereco';
import { Categoria } from '../../../models/categoria';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-eventos-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-eventos-admin.component.html',
  styleUrl: './lista-eventos-admin.component.scss',
})
export class ListaEventosAdminComponent {
  lista: Evento[] = [];

  constructor() {
    const endereco1 = new Endereco(1, 'São Paulo', 'São Paulo', 'Rua A', '100');
    const endereco2 = new Endereco(
      2,
      'Rio de Janeiro',
      'Rio de Janeiro',
      'Rua B',
      '200'
    );
    const endereco3 = new Endereco(
      3,
      'Belo Horizonte',
      'Minas Gerais',
      'Rua C',
      '300'
    );

    const categoriaMusica = new Categoria(1, 'Música');
    const categoriaEsporte = new Categoria(2, 'Esporte');
    const categoriaTeatro = new Categoria(3, 'Teatro');

    this.lista.push(
      new Evento(
        1,
        'Concerto de Rock',
        150,
        300,
        new Date('2024-11-01'),
        'Show de rock ao vivo',
        endereco1,
        new Set([categoriaMusica])
      ),
      new Evento(
        2,
        'Jogo de Futebol',
        100,
        500,
        new Date('2024-12-15'),
        'Partida entre grandes times',
        endereco2,
        new Set([categoriaEsporte])
      ),
      new Evento(
        3,
        'Peça de Teatro',
        80,
        200,
        new Date('2024-11-20'),
        'Espetáculo teatral imperdível',
        endereco3,
        new Set([categoriaTeatro])
      )
    );
  }

  deletar(){

  }
}
