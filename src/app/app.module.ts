import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductListComponent,
    SellDirectlyProductsComponent,
    MycartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule { }
