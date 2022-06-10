import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { AddProductComponent } from '../dialogues/add-product/add-product.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, OnChanges {

  constructor(public router: Router, private dlg: MatDialog,
    private dlgRef: MatDialogRef<AddProductComponent>,
    private db: DbService, @Inject(MAT_DIALOG_DATA) public dlgData: any) {
    console.log(dlgData)
  }

  ngOnInit(): void {
  }

  addProd() {
    this.dlg.open(AddProductComponent, {
      width: '750px',
      height: '500px',
      disableClose: true
    }).afterClosed().subscribe(res => {
      if ((res != null || res != {} || res != "" || res.length > 0) && (typeof (res) == "object")) {
        this.db.products.push(res);
      } else {
        window.alert("Something went wrong..!")
      }
    })
  }

  ngOnChanges() {

  }

}
