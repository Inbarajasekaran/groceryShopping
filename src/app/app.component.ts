import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DbService } from './services/db.service';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  logout() {
    this.helper.showName('')
    localStorage.clear();
    this.router.navigateByUrl('/')
  }


}
