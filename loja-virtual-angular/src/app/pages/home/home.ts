import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importe o ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  // 2. Injete o cdr no construtor
  constructor(
    private apiService: ApiService, 
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.cdr.detectChanges(); // 3. Força o Angular a pintar os produtos na tela na hora!
      },
      error: (err) => console.error('Erro ao buscar produtos:', err)
    });
  }
}