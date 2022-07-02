import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANT } from '~app/shared/utils/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginForm: FormGroup;
  error: string;
  loginAttempt: number;
  login_attempts = 5;
  attamp_error: string;
  combinelabel: any;
  passwordlabel: any;
  combinerequired: any;
  combineinvalid: any;
  passwordrequired: any;
  txtEmail: string;
  txtPassword: any;
  errors: any;
  // links: any[];
  constructor(private router: Router, private fb: FormBuilder,) {
    // this.links = [
    //   {
    //     label: 'Login',
    //     link: './mr/mr-login',
    //     index: 0
    //   }, {
    //     label: 'Register',
    //     link: './mr/mr-register',
    //     index: 1
    //   },
    // ];
  }

  ngOnInit(): void {
    this.InitForm();
  }
  InitForm() {
    this.LoginForm = this.fb.group({
      mobileno: ['', Validators.required,],

      Password: ['', Validators.required]
    });
  }
  get f() {
    return this.LoginForm.controls;
  }


  submit() {

  }
}
