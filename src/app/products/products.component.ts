import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  clickProduct(id: string) {
    console.log(id);

  }

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }
  products: Product[] = this.productService.getAllProducts();


}
