import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
      console.log(this.product);
    });

  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {

    const newProduct: Product = {
      id: '222',
      title: 'neuvo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'

    }
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product)
    })
  }

  updateProduct() {
    const newProduct: Partial<Product> = {

      price: 55555,
      description: 'edicion producto'

    }
    this.productService.updateProduct('2', newProduct).subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct() {
    this.productService.deleteProduct("222").subscribe(product => {
      console.log(product)
    })
  }

}
