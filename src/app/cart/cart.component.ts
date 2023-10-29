import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Product } from '../market/market.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
  }

  checkout(): void {

    // Create a new order object
    const order = {
      items: this.cartService.getCart(),
    };

    // Store the order information in local storage
    localStorage.setItem('order', JSON.stringify(order));

    // Empty the cart
    this.cartService.emptyCart();

    // Redirect the customer to the checkout confirmation page
    this.router.navigate(['/checkout/confirmation']);

    alert('Order confirmed!');
  }

  emptyCart(): void {
    this.cartService.emptyCart();
  }
}
