import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { CSSStyleBindingComponent } from './css-style-binding/css-style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeBindingComponent,
    CSSStyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
