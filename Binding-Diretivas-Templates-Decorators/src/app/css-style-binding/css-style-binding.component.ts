import { Component } from '@angular/core';

@Component({
  selector: 'app-css-style-binding',
  templateUrl: './css-style-binding.component.html',
  styleUrl: './css-style-binding.component.scss',
})
export class CSSStyleBindingComponent {
  widthButton0 = '100px';
  widthButton1 = 130;
  color = 'blue';
  styleOBJ = {
    width: '150px',
    backgroundColor: 'orange',
  };

  updateStyleOBJ() {
    console.log('updateStyleOBJ');

    this.styleOBJ = {
      width:'170px',
      backgroundColor: 'red'
    }
  };

  
}
