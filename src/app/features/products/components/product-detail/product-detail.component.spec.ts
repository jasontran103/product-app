/**
 * Unit tests for the ProductDetailComponent
 * This file contains tests to verify the basic functionality of the product detail component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  // Component instance that will be tested
  let component: ProductDetailComponent;
  // Component fixture for testing
  let fixture: ComponentFixture<ProductDetailComponent>;

  // Setup before each test
  beforeEach(async () => {
    // Configure the testing module with required imports
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent]
    })
    .compileComponents();

    // Create component instance
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  // Test to verify component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
