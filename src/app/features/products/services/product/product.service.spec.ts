/**
 * Unit tests for the ProductService
 * This file contains tests to verify the basic functionality of the product service
 */

import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  // Service instance that will be tested
  let service: ProductService;

  // Setup before each test
  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});
    // Inject the service instance
    service = TestBed.inject(ProductService);
  });

  // Test to verify service creation
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
