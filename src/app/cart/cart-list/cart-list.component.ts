import { CartItem } from '../cart';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'sw-cart-list',
  standalone: true,
  imports: [CartItemComponent, NgFor, NgIf],
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  PageTitle = 'Cart';

  CartItem: CartItem[] = [];
}
