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





@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardHomeComponent, ProductTableComponent, ProductsListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,



  ]
})
export class AdminModule { }
