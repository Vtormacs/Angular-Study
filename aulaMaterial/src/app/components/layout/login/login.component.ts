import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
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
    } else {
      alert('Dados incorretos');
    }
  }
}
