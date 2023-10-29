import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product/product.component';
import { ProductStorageService } from '../product-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  productForm!: FormGroup;
  errorMessages: { [key: string]: string; } = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService, private productStorageService: ProductStorageService) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      description: ['', Validators.required, Validators.minLength(6)]
    });
  }

  async onSubmit() {
    if (!this.productForm) {
      return;
    }

    if (this.productForm.invalid) {
      return;
    }

    const product = this.productForm.value as Product;

    // Store the product data in local storage
    this.productStorageService.addProduct(product);

    alert('Product added!');

    this.productForm.reset();
  }
}
