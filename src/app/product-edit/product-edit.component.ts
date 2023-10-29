import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'my-app',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent  {
  productForm!: FormGroup;
  errorMessages: { [key: string]: string; } = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) {}

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
    await this.productService.createProduct(product);

    alert('Product added!');

    this.productForm.reset();
  }
}
