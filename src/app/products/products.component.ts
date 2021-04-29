import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductsService) { }
  clickProduct(id: string) {
    console.log(id);
  }

  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }


}
