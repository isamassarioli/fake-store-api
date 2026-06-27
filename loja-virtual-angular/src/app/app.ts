import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen bg-gray-50 pt-4">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {}