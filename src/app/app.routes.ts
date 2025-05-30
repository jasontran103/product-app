import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';
import { HomeComponent } from './features/home/components/home.component';
import { ShoppingCartComponent } from './features/shopping-cart/components/shopping-cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  // This route will be used to display the product detail page depending on the id
  { path: 'products/:id', component: ProductDetailComponent },
  // This route will be used to display the shopping cart page
  { path: 'shopping-cart', component: ShoppingCartComponent },
  // This route will be used to redirect to the product list page if the route is not found
  { path: '**', redirectTo: '/products' },
];