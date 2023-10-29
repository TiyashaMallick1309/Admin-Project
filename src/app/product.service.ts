import { Injectable } from '@angular/core';
import { Product } from './product/product.component';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a product description.',
      price: 10.99,
      imageUrl: 'https://example.com/product-1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another product description.',
      price: 20.99,
      imageUrl: 'https://example.com/product-2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is yet another product description.',
      price: 30.99,
      imageUrl: 'https://example.com/product-3.jpg'
    }
  ];

  createProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id)!;
  }
  
  
}
