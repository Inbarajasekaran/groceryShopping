import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MyCartComponent } from './components/product-list/my-cart/my-cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SellDirectlyProductsComponent } from './components/product-list/sell-directly-products/sell-directly-products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'partnership', component: SellDirectlyProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
