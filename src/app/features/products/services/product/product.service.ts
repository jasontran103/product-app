import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Defining the shape of the product object
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
}

/**
 * Sample mock data (hard coded data) using unsplash images as placeholder
 */
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smartphone X Pro',
    price: 999.99,
    description: 'Latest flagship smartphone with 6.7" OLED display, 256GB storage, and triple camera system.',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  },
  {
    id: 2,
    name: 'Premium Wireless Headphones',
    price: 249.99,
    description: 'Active noise cancellation, 30-hour battery life, and premium sound quality with deep bass.',
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 3,
    name: 'Smart Watch Series 5',
    price: 399.99,
    description: 'Advanced health monitoring, GPS tracking, and always-on display with 18-hour battery life.',
    category: 'Wearables',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
  },
  {
    id: 4,
    name: 'Ultra Slim Laptop',
    price: 1499.99,
    description: '13" Retina display, 16GB RAM, 512GB SSD, and all-day battery life in a sleek aluminum body.',
    category: 'Computers',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
  },
  {
    id: 5,
    name: 'Professional DSLR Camera',
    price: 1299.99,
    description: '24.1MP sensor, 4K video recording, and advanced autofocus system for stunning photography.',
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  },
  {
    id: 6,
    name: 'Gaming Console Pro',
    price: 499.99,
    description: 'Next-gen gaming with 4K resolution, ray tracing, and ultra-fast SSD storage.',
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128',
  },
  {
    id: 7,
    name: 'Smart Home Hub',
    price: 129.99,
    description: 'Control your entire home with voice commands, compatible with all major smart home devices.',
    category: 'Smart Home',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827',
  },
  {
    id: 8,
    name: 'Wireless Earbuds',
    price: 159.99,
    description: 'True wireless design, active noise cancellation, and premium sound quality in a compact package.',
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
  },
  {
    id: 9,
    name: 'Tablet Pro',
    price: 799.99,
    description: '12.9" Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.',
    category: 'Tablets',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
  },
  {
    id: 10,
    name: 'Smart Speaker',
    price: 99.99,
    description: 'Voice-controlled speaker with premium sound quality and built-in smart home controls.',
    category: 'Smart Home',
    imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230',
  },
  {
    id: 11,
    name: 'Gaming Laptop',
    price: 1799.99,
    description: '15.6" 144Hz display, RTX 3070, 32GB RAM, and 1TB SSD for ultimate gaming performance.',
    category: 'Computers',
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
  },
  {
    id: 12,
    name: 'Fitness Tracker',
    price: 149.99,
    description: '24/7 heart rate monitoring, sleep tracking, and 7-day battery life in a sleek design.',
    category: 'Wearables',
    imageUrl: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288',
  },
  {
    id: 13,
    name: 'Wireless Charger',
    price: 49.99,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices, sleek aluminum design.',
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07',
  },
  {
    id: 14,
    name: 'Smart TV 4K',
    price: 899.99,
    description: '55" 4K HDR display with built-in streaming apps and voice control capabilities.',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
  },
  {
    id: 15,
    name: 'Mechanical Keyboard',
    price: 129.99,
    description: 'RGB backlit mechanical keyboard with customizable keys and premium build quality.',
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef',
  },
];

/**
 * Service to provide product data.
 * Uses RxJS Observable to handle asynchronous data streams.
 */
@Injectable({
  providedIn: 'root', 
})
export class ProductService {
  /**
   * Retrieves all products as an observable.
   * @returns Observable<Product[]> - List of products
   */
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  /**
   * Retrieves a product by its ID.
   * @param id - The ID of the product to retrieve
   * @returns Observable<Product | undefined> - The product or undefined if not found
   */
  getProductById(id: number): Observable<Product | undefined> {
    return of(PRODUCTS.find(product => product.id === id));
  }
}
