import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from "app/shared/services/loader.service";
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
  constructor(private router: Router, private fb: FormBuilder, private LoaderService: LoaderService,) {
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
      MobileNumber: ['', Validators.required,],

      Password: ['', Validators.required]
    });
  }
  get f() {
    return this.LoginForm.controls;
  }


  submit() {
    console.log("login")
    this.LoaderService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.LoaderService.hide();
    }, 5000);
  }
}
