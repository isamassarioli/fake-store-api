import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home'; 
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { LoginComponent } from './pages/login/login';

// É exatamente esta linha abaixo (export const routes) que o app.config.ts está procurando
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'produto/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent }
];