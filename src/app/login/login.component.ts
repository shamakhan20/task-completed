import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {
  }
  fieldTextType: boolean = true;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      ID: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  inputValue(user) {
    console.log(user)
    localStorage.setItem("Username", user)
  }

  passwordValue(password) {
    console.log(password)
    var securePassword = CryptoJS.SHA1(password);
    localStorage.setItem("password", securePassword)
  }
  get ID() {
    return this.loginForm.get('ID')
  }

  get password() {
    return this.loginForm.get('password')
  }


  login() {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.router.navigate(['/post'])
    }
    else {
      alert("Enter Username and password")
    }
  }

}
