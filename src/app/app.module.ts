import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { SellDirectlyProductsComponent } from './components/sell-directly-products/sell-directly-products.component';
import { MaterialModule } from './materials/material.module';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { AddProductComponent } from './components/dialogues/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductListComponent,
    SellDirectlyProductsComponent,
    MycartComponent,
    ManageProductsComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule { }
