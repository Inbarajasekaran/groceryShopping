import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SellDirectlyProductsComponent } from './components/sell-directly-products/sell-directly-products.component';
import { RegisterComponent } from './components/register/register.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'partnership', component: SellDirectlyProductsComponent },
  { path: 'my-orders', component: MycartComponent },
  { path: 'manage-products', component: ManageProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
