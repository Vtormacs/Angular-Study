import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText = 'Texto Inicial';
  inputType = 'text';
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  textValueInput() {
    this.inputText = 'Texto Alterado';
  }

  textOriginal() {
    this.inputText = 'Texto Inicial';
  }

  mudarTypePasswor() {
    this.inputType = 'password';
  }

  mudarTypeText() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }
}
