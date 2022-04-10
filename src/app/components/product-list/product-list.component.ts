import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTab } from '@angular/material/tabs';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(private db: DbService) { }
  products: any = [];
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['selectAll', 'SNo', 'name', 'stocksAvail', 'weight', 'amount'];
  selection = new SelectionModel<any>(true, []);
  emptyCheck: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  addedData = new MatTableDataSource([]);
  cartDisplayColumns: string[] = ['SNo', 'name', 'quantity', 'amount', 'remove']

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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
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
      console.log(this.addedData.data)
    }
    else {
      this.emptyCheck = true;
      this.addedData = new MatTableDataSource(this.selection.selected)
    }
  }

  removeFromCart(item) {
    console.log(item)
    let arr = this.addedData.data
    arr.forEach(function (ele, i) {
      if (ele['name'] == item['name']) {
        arr.splice(i, 1)
      }
    })
    this.selection = new SelectionModel<Element>(true, arr)
    this.addedData = new MatTableDataSource(arr)
  }


}
