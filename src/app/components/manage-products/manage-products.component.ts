import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductComponent } from '../dialogues/add-product/add-product.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(public router : Router, private dlg : MatDialog) {}

  ngOnInit(): void {
  }

  addProd() {
    this.dlg.open(AddProductComponent, {
      width : '750px',
      height : '500px',
      disableClose: true
    })
  }

}
