import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // OBRIGATÓRIO para usar formulários no Angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importado aqui para o HTML reconhecer o ngModel
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      console.log('Login efetuado com:', this.email, this.password);
      // Redireciona para a home após o login bem-sucedido
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos.';
    }
  }
}