import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(private db: DbService, private router: Router, private dlg: MatDialog) { }
  products: any = [];
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['selectAll', 'SNo', 'name', 'stocksAvail', 'weight', 'amount'];
  selection = new SelectionModel<any>(true, []);
  emptyCheck: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  addedData = new MatTableDataSource([]);
  cartDisplayColumns: string[] = ['SNo', 'name', 'quantity', 'amount', 'remove'];
  noOfStocks: any = [];

  ngOnInit(): void {
    this.db.products.forEach((ele, i) => {
      this.products.push(ele)
    })
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
  }

  // requiredAmt(ele, val) { // ALTENATIVELEY USING noOfStocks AS ngModel
  //   ele['stocksAvail'] = ele['noOfProduct'] - val;
  // }

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
