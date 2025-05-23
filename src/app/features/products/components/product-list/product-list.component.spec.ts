/**
 * Unit tests for the ProductListComponent
 * This file contains tests to verify the basic functionality of the product list component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  // Component instance that will be tested
  let component: ProductListComponent;
  // Component fixture for testing
  let fixture: ComponentFixture<ProductListComponent>;

  // Setup before each test
  beforeEach(async () => {
    // Configure the testing module with required imports
    await TestBed.configureTestingModule({
      imports: [ProductListComponent]
    })
    .compileComponents();

    // Create component instance
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  // Test to verify component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
