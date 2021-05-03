import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {
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
