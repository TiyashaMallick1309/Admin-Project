import { Injectable } from '@angular/core';
import { Product } from './market/market.component';

export class CartItem {
  product!: Product;
  quantity!: number;
  imageUrl!: string;
  name!: string;
  price!:number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cart: CartItem[] = [];

  public addToCart(product: Product): void {
    const cartItem = new CartItem();
    cartItem.product = product;
    cartItem.quantity = 1;
    cartItem.imageUrl = product.imageUrl;
    cartItem.name = product.name;
    this.cart.push(cartItem);
  }

  public getCart(): CartItem[] {
    return this.cart;
  }

  public emptyCart(): void {
    this.cart = [];
  }

  public getTotal(): number {
    let total = 0;
    for (const cartItem of this.cart) {
      total += cartItem.product.price * cartItem.quantity;
    }
    return total;
  }

  public getTax(): number {
    return this.getTotal() * 0.06;
  }

}
