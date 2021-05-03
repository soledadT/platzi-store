import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();//para evitar que recargue la pagina
    if (this.form.valid) {
      const product = this.form.value;
      console.log(product);
    }
  }



}
