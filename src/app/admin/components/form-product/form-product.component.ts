import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]

    });
  }

  saveProduct(event: Event) {
    event.preventDefault();//para evitar que recargue la pagina
    if (this.form.valid) {
      const product = this.form.value;
      console.log(product);
      this.productServices.createProduct(product).subscribe(
        (newProduct) => {
          console.log(newProduct)
          this.router.navigate(['./admin/products'])
        }
      );
    }
  }

  get priceField() {
    return this.form.get('price');
  }



}
