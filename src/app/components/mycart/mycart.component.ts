import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTab } from '@angular/material/tabs';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  prodList = new MatTableDataSource([]);
  constructor(private db: DbService) { };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayColumns: string[] = ['SNo', 'name', 'quantity', 'amount'];

  ngOnInit(): void {
    this.prodList.data = this.db.selectedProducts;
    setTimeout(() => {
      this.prodList.paginator = this.paginator;
    })
  }

}
