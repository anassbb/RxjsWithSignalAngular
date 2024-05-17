import { Subscription, tap } from 'rxjs';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from '@angular/core';

import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
})
export class ProductDetailComponent implements OnChanges, OnDestroy {
  @Input() productId: number = 0;
  errorMessage = '';

  sub!: Subscription;
  // Product to display
  product: Product | null = null;

  private productService = inject(ProductService);

  // Set the page title
  pageTitle = this.product
    ? `Product Detail for: ${this.product.productName}`
    : 'Product Detail';

  ngOnChanges(changes: SimpleChanges): void {
    const id = changes['productId'].currentValue;

    if (id) {
      this.sub = this.productService
        .getProduct(id)
        .pipe(tap(() => console.log('im in prodcut detail component')))
        .subscribe((product) => (this.product = product));
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  addToCart(product: Product) {}
}
