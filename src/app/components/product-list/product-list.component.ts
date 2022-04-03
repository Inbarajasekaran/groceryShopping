import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private db: DbService) { }
  products: any = [];
  ngOnInit(): void {
    this.db.products.forEach(ele => {
      this.products.push(ele)
    })
    console.log(this.products)
  }


}
