import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService, Product } from '../../services/product/product.service';

/**
 * Component to display a list of products with filtering options.
 * Uses ProductCardComponent to display individual product cards.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  /** List of products to display */
  products: Product[] = [];
  /** List of filtered products */
  filteredProducts: Product[] = [];
  /** List of categories to filter by */
  categories: string[] = ['All', 'Electronics', 'Audio', 'Wearables', 'Computers', 'Smart Home'];
  /** Selected category to filter by */
  selectedCategory = 'All';

  /**
   * Constructor to inject dependencies.
   * @param productService - Service to fetch products
   * @param router - Router for navigation
   */
  constructor(private productService: ProductService, private router: Router) {}

  /**
   * Lifecycle hook to initialize component.
   * Fetches products and filters them based on the selected category.
   */
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filterProducts();
    });
  }

  /**
   * Filters products based on the selected category.
   */
  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === this.selectedCategory);
    }
  }

  /**
   * Filters products based on the selected category.
   * @param category - The category to filter by
   */
  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  /**
   * Navigates to the product details page.
   * @param product - The product to navigate to /products/:id
   */
  viewDetails(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
