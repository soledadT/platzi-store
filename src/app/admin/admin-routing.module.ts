import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'inventario',
        component: ProductTableComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: '',
        component: DashboardHomeComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
