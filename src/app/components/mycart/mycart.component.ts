import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  prodList: any[];
  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.prodList = this.db.selectedProducts;
    console.log(this.prodList)
  }

}
