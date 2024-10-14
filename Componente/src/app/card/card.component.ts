import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos
}

interface IInfos{
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {

  //tipo = "Simples";
  //preco = 100;

  //getFullPrice() { 
  // return 'R$' + this.preco + ',00/mes';
  //}

  //plano = {
  //infos: {
  //tipo: "Simples",
  //preco: 100,
  //},
  //};

  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
