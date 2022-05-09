import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  show: boolean = false;
  validUser: boolean = false;
  constructor(private fb: FormBuilder, private db: DbService, public router: Router, private helper: HelperService, private dlgRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  showPwd() {
    this.show = !this.show
  }

  login() {
    this.db.userLogin.forEach(element => {
      if (element['userName'] == this.loginForm.controls.userName.value && element['password'] == this.loginForm.controls.password.value) {
        this.validUser = true;
      }
    });
    if (this.validUser == true) {
      if (this.router.url == '/' || this.router.url == '/login') {
        localStorage.setItem('user', this.loginForm.value['userName']);
        this.helper.showName(this.loginForm.value['userName'])
        this.router.navigateByUrl('/dashboard');
      } else {
        localStorage.setItem('user', this.loginForm.value['userName']);
        this.helper.showName(this.loginForm.value['userName']);
        this.dlgRef.close(true)
      }
    } else {
      window.alert("Invalid Credentials.. : ~ {");
    }
  }

}
