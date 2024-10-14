import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card2Component } from '../card2/card2.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { Card2ButtonComponent } from '../card2-button/card2-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    CardComponent,
    Card2Component,
    CardButtonComponent,
    Card2ButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [
    CardComponent,
    Card2Component,
    //CardButtonComponent,
    //Card2ButtonComponent
  ],
})
export class CardsModule {}
