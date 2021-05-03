import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';





@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardHomeComponent, ProductTableComponent, ProductsListComponent, FormProductComponent, FormEditComponent, FormLoginComponent, FormRegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,



  ]
})
export class AdminModule { }
