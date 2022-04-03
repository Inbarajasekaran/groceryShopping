import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  show: boolean = false;
  validUser: boolean = false;
  constructor(private fb: FormBuilder, private db: DbService, private router: Router, private helper: HelperService) { }

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
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('user', this.loginForm.value['userName'])
      this.helper.showName(this.loginForm.value['userName'])
    } else {
      window.alert("Invalid Credentials.. : ~ {");
    }
  }

}
