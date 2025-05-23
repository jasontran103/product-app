/**
 * Unit tests for the ProductCardComponent
 * This file contains tests to verify the basic functionality of the product card component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  // Component instance that will be tested
  let component: ProductCardComponent;
  // Component fixture for testing
  let fixture: ComponentFixture<ProductCardComponent>;

  // Setup before each test
  beforeEach(async () => {
    // Configure the testing module with required imports
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    })
    .compileComponents();

    // Create component instance
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  // Test to verify component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});