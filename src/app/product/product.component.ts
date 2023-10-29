import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductStorageService } from '../product-storage.service';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{

  product: Product | undefined;
  products!: Product[];

  constructor(private productStorageService: ProductStorageService,private activeRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    console.log(this.activeRoute);

      this.activeRoute.params.subscribe((params)=>{
          let productIndex=this.productService.products.findIndex(
              (p)=>p.id==params['productId']
          );
          this.product=this.productService.products[productIndex];
      });
  }

  ngOnInit() {
    // Retrieve the product data from local storage    
this.products = this.productStorageService.getProducts();
  }
  
  shopProducts() {
    this.router.navigate(['product']);
  }

  addProduct() {
    this.router.navigate(['product/add']);
  }

  viewProduct(product: Product) {
    this.router.navigate(['product', product.id]);
  }

  editProduct(product: Product) {
    this.router.navigate(['product/edit', product.id]);
  }

  hidePinButtons() {
    const pinButtons = document.querySelector('.pin-buttons');
    pinButtons!.classList.add('hidden');
  }
  
  
}