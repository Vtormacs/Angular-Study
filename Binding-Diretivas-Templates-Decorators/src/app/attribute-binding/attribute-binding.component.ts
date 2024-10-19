import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss',
})
export class AttributeBindingComponent {
  buttonTitle = 'titulo do botao';
  buttonDisable = true;

  mudarTituloDoButtonTible() {
    this.buttonTitle = 'Titulo Alterado';
    this.buttonDisable = !this.buttonDisable;
  }
}
