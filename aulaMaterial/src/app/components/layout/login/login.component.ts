import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, MdbTabsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email!: string;
  senha!: string;

  router = inject(Router);

  logar() {
    if (this.email == 'admin@gmail.com' && this.senha == 'admin') {
      this.router.navigate(['admin/eventos']);
    }
    if (this.email == 'normal@gmail.com' && this.senha == 'normal') {
      this.router.navigate(['pagina-principal']);
    } else {
      alert('Dados incorretos');
      console.log(this.email);
      console.log(this.senha);
    }
  }
}
