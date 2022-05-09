import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  test = false;
  verified: boolean = false;
  maxDate: Date;
  show: boolean = false;
  constructor(private fb: FormBuilder, private db: DbService, private router: Router) {
    this.maxDate = new Date()
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      mailId: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dob: [''],
      userName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      verifyPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  showPwd() {
    this.show = !this.show
  }

  checkPassword(pwd, reEnterPwd?) {
    if (pwd.value === reEnterPwd.value) {
      this.verified = true;
    } else {
      this.verified = false;
    }
    if (this.verified == false) {
      this.registerForm.controls['verifyPassword'].setErrors({ 'incorrect': true });;
    }
    console.log(this.verified)
  }

  reset() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      mailId: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dob: [''],
      userName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      verifyPassword: ['', Validators.required]
    })
    this.registerForm.clearValidators()
    this.registerForm.updateValueAndValidity()
  }

  register() {
    this.db.register.push(this.registerForm.value)
    console.log(this.db.register)
    this.db.userLogin.push({ userName: this.registerForm.controls['userName'].value, password: this.registerForm.controls['password'].value })
    this.router.navigateByUrl('/dashboard')
  }

}