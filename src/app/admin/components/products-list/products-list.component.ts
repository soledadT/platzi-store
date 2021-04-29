import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  products;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    return this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });

  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(rta => {
      this.products.splice(id);
    })
  }

}
