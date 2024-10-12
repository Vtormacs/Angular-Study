import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { Card2ButtonComponent } from './card2-button/card2-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Card2Component,
    CardButtonComponent,
    Card2ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
