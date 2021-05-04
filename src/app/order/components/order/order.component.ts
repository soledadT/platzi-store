import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private cartServices: CartService) {
    this.products$ = this.cartServices.cart$;
  }

  ngOnInit(): void {
  }

}
