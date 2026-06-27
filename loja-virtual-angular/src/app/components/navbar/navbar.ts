import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="bg-slate-900 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold">FakeStore</a>
        <div class="space-x-4">
          <a routerLink="/" class="hover:text-gray-300">Home</a>
          <a routerLink="/login" class="hover:text-gray-300">Login</a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}