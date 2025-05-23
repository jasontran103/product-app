import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product/product.service';

/**
 * Component to display detailed information about a specific product.
 * Receives product data through ActivatedRoute and ProductService.
 */
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  /** Product data to be displayed */
  product?: Product;
  /** Flag to indicate if product is not found */
  notFound = false;

  /**
   * Constructor to inject dependencies.
   * @param route - ActivatedRoute to get product ID from URL
   * @param productService - Service to fetch product details (our mockdata)
   * @param router - Router for navigation
   */
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  /**
   * Lifecycle hook to initialize component.
   * Fetches product details based on the ID from the route.
   */
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(product => {
      if (product) {
        this.product = product;
      } else {
        this.notFound = true;
      }
    });
  }

  /**
   * Navigates back to the product list page.
   */
  goBack() {
    this.router.navigate(['/products']);
  }
}
