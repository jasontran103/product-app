import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product/product.service';

/**
 * Component to display a single product card with details and action button.
 * Accepts a product via @Input and emits an event on button click.
*/
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  /** Product data passed from parent component */
  @Input() product!: Product;

  /** Event emitter to notify parent about view details button click */
  @Output() viewDetails = new EventEmitter<void>();

  /**
   * Emits an event to notify the parent component about a button click.
   * This is used to navigate to the product details page.
   */
  onViewDetails() {
    this.viewDetails.emit();
  }
}
