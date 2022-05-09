import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productList = []
  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.db.products.forEach(ele => {
      this.productList.push(ele)
    })
    console.log(this.productList)
  }

}
