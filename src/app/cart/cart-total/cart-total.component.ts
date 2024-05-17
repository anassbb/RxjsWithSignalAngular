import { CartItem } from './../cart';
import { CurrencyPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'sw-cart-total',
  templateUrl: './cart-total.component.html',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
})
export class CartTotalComponent {
  CartItem = [];

  subTotal = 100;
  delivryFee = 20;
  tax = 10;
  totalPrice = this.subTotal + this.delivryFee + this.tax;
}
