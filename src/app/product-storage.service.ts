import { Injectable } from '@angular/core';
import { Product } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  private products: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }
}
