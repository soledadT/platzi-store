import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();//para evitar que recargue la pagina
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
        .then(() => {
          this.route.navigate(["/admin"])
        }).catch(() => {
          alert('no es valido')
        })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
