import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importar o ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef // 2. Injetar o ChangeDetectorRef no construtor
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getProductById(id).subscribe({
        next: (data) => {
          this.product = data;
          this.cdr.detectChanges(); // 3. Avisar o Angular para renderizar a página imediatamente!
        },
        error: (err) => console.error(err)
      });
    }
  }
}