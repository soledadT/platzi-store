import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../utils/validators';
import { Product } from '../../../product.model';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
  form: FormGroup;
  id;


  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productServices.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });


    })

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

  updateProduct(event: Event) {
    event.preventDefault();//para evitar que recargue la pagina
    if (this.form.valid) {
      const product = this.form.value;
      this.productServices.updateProduct(this.id, product).subscribe(
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
