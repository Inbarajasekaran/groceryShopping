import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productGroup: FormGroup;
  prodType = [];
  constructor(private fb: FormBuilder, private db: DbService, private dlgRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
    this.productGroup = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      noOfProduct: ['', [Validators.required, Validators.min(1)]],
      amount: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(1)]],
      stocksAvail: [''],
      stocksSold: ['0']
    });
    let idVal = null;
    let prodArr = [];
    this.db.products.forEach(ele => {
      idVal = Math.floor(ele['id'] + 1);
      prodArr.push(ele['type']);
    })
    this.productGroup.controls['id'].setValue(idVal);
    this.productGroup.controls['noOfProduct'].setValue(this.productGroup.controls['noOfProduct'].value)
    this.productGroup.controls['id'].disable();
    this.prodType = [...new Set(prodArr)];
  }

  addProducts() {
    this.db.products.push(this.productGroup.getRawValue());
    this.dlgRef.close(this.productGroup.getRawValue())
    // this.dlgRef.afterClosed().subscribe(res => console.log(res))
  }

}
