import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loginPage = false;
  registerationPage = false;
  userName: string = null;
  opened = false;
  routerURL = '';
  constructor(public router: Router, public db: DbService, public helper: HelperService) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.routerURL = this.router.url;
          if (this.router.url == '/' || this.router.url == '/login') {
            this.loginPage = true;
          } else {
            this.loginPage = false;
          }
          if (this.router.url == '/register') {
            this.registerationPage = true;
          } else {
            this.registerationPage = false;
          }
        }
      });

    this.helper.getName().subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.helper.showName('')
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

}