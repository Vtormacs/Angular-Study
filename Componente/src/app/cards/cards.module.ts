import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card2Component } from '../card2/card2.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { Card2ButtonComponent } from '../card2-button/card2-button.component';

@NgModule({
  declarations: [
    CardComponent,
    Card2Component,
    CardButtonComponent,
    Card2ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    Card2Component,
    //CardButtonComponent,
    //Card2ButtonComponent
  ]
})
export class CardsModule { }
