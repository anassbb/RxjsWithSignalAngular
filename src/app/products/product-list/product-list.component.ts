import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { NgIf, NgFor, NgClass } from '@angular/common';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';

  sub!: Subscription;
  subProduct!: Subscription;
  private productService = inject(ProductService);

  // Products
  products: Product[] = [];

  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(tap(() => console.log('im in list products componenets')))
      .subscribe((products) => {
        this.products = products;
        console.log(this.products);
      });
  }

  onSelected(productId: number): void {
    this.selectedProductId = productId;
    this.productService
      .getProduct(this.selectedProductId)
      .pipe(tap(() => console.log('im in product list componenet  get by id')))
      .subscribe((product) => console.log(product));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subProduct.unsubscribe();
  }
}
