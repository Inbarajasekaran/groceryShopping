import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { AddProductComponent } from '../dialogues/add-product/add-product.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(private db: DbService, public router: Router, private dlg: MatDialog, private dlgRef: MatDialogRef<AddProductComponent>) { }
  selectedType: any;
  type: any = [];
  selectedPrice: any;
  price: any = [];
  products: any = [];
  filteredObj: any = {};
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['selectAll', 'SNo', 'name', 'stocksAvail', 'weight', 'amount'];
  selection = new SelectionModel<any>(true, []);
  emptyCheck: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  addedData = new MatTableDataSource([]);
  cartDisplayColumns: string[] = ['SNo', 'name', 'quantity', 'amount', 'remove'];
  noOfStocks: any = [];
  enableAddCart = false;

  ngOnInit(): void {
    if (this.router.url == '/manage-products') {
      this.displayedColumns.push('remove');
    }
    this.db.products.forEach((ele, i) => {
      this.products.push(ele)
      this.type.push(ele['type']);
      let typeArr = [... new Set(this.type)]
      this.type = typeArr;
      // this.price.push(ele['amount']);
      // let priceArr = [... new Set(this.type)];
      // this.price = priceArr;
    });
    // this.dlgRef.afterClosed().subscribe(res => { console.log(res) })

  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
    this.addedData = new MatTableDataSource([]);
  }

  /* WHETHER THE NUMBER OF SELECTED ELEMENTS MATCHESTHE TOTAL NUMBER OF ROWS */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* SELECTS ALL THE ROWS IF THEY ARE NOT SELECTED; OTHERWISE CLEAR selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /* THE LABEL FOR THE CHECKBOX ON THE PASSED ROW */
  // checkboxLabel(row?: any): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.sNo + 1}`;
  // }

  eventCheck() {
    this.enableAddCart = false;
    if (this.selection.selected.length > 0) {
      this.emptyCheck = false;
      this.addedData = new MatTableDataSource(this.selection.selected)
    }
    else {
      this.emptyCheck = true;
      this.addedData = new MatTableDataSource(this.selection.selected)
    }
  }

  requiredAmt(ele) { // HERE THE ele WILL GET THE quantity FROM ngModel
    ele['stocksAvail'] = ele['noOfProduct'] - ele['quantity'];

    if (ele['quantity'] > ele['stocksAvail']) { // TO HANDLE NUMBER TO NEGETIVE VALUE
      ele['stocksAvail'] = 0
    }
    // CODE FOR ENABLE Make Order BUTTON
    let tmpVal = 0;
    this.enableAddCart = false;
    this.addedData.data.forEach(ele => {
      if (ele['quantity'] != undefined && ele['quantity'] != "") {
        ++tmpVal;
      } else {
        tmpVal = 0;
      }
    })
    if (tmpVal <= 0) {
      this.enableAddCart = false;
    } else {
      for (let i = 0; i < this.addedData.data.length; i++) {
        if (this.addedData.data[i]['noOfProduct'] >= this.addedData.data[i]['quantity']) {
          this.enableAddCart = true;
        } else {
          this.enableAddCart = false;
          break;
        }
      }

    }
  }

  // requiredAmt(ele, val) { // ALTENATIVELEY USING noOfStocks AS ngModel
  //   ele['stocksAvail'] = ele['noOfProduct'] - val;
  // }

  filter(type, val) {
    // this.price = [];
    // this.type = [];
    this.dataSource = new MatTableDataSource(this.products);
    if (this.filteredObj[type]) {
      this.filteredObj[type] = val;
    } else {
      // this.filteredObj = { type: val }
      this.filteredObj[type] = val;
    }
    let dataSourceBackup = this.dataSource.data;
    let temp = [];
    dataSourceBackup.forEach(ele => {
      if (this.check(this.filteredObj, ele)) {
        temp.push(ele);
      }
    })
    this.dataSource = new MatTableDataSource(temp);
    this.dataSource.paginator = this.paginator;
    this.dataSource.data.forEach(ele => {
      // this.price.push(ele['amount'])
      this.type.push(ele['type'])
    })
    if (val.length <= 0) {
      this.dataSource = new MatTableDataSource(this.products);
    }
  }

  check(filteredVal, element) {
    let sts = false;
    for (const key in filteredVal) {
      if (typeof filteredVal[key] != "string") {
        if (filteredVal[key].indexOf(element[key]) > -1) {
          sts = true;
          break;
        } else {
          sts = false;
          // break;
        }
      } else {
        if (filteredVal[key] == element[key]) {
          sts = true;
        } else {
          sts = false;
          // break;
        }
      }
    }
    return sts;
  }

  removeFromCart(item) {
    let arr = this.addedData.data
    arr.forEach(function (ele, i) {
      if (ele['name'] == item['name']) {
        arr.splice(i, 1)
      }
    })
    this.selection = new SelectionModel<Element>(true, arr)
    this.addedData = new MatTableDataSource(arr)
  }

  makeOrder() {
    if (this.enableAddCart == true) {
      if (localStorage.getItem('user')) {
        this.db.selectedProducts = this.addedData.data;
        this.router.navigateByUrl('my-orders');
      } else {
        this.dlg.open(LoginComponent).afterClosed().subscribe(res => {
          if (res == true) {
            this.db.selectedProducts = this.addedData.data;
            this.router.navigateByUrl('my-orders');
          }
        })
      }
    }
  }

}
