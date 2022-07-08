import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser, } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  template: `
  <ng-template>
    <router-outlet></router-outlet>
    <app-register></app-register>
  </ng-template>
`
})
export class LoginComponent implements OnInit {
  // @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<any>;
  hide = true;
  LoginForm!: FormGroup;
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
  isLoggedin?: boolean;
  // contentTemplate: TemplateRef<any>;


  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.InitForm();
    // this.componentInstance.contentTemplate = this.templateRef;
  }
  InitForm() {
    this.LoginForm = this.fb.group({
      MobileNumber: ['', Validators.required,],
      Password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = user != null;
      // console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(["/mr/dashboard"]);
  }
  // logOut(): void {
  //   this.socialAuthService.signOut();
  // }
  get f() {
    return this.LoginForm.controls;
  }


  submit() {
    if (this.LoginForm.invalid) {
      this.router.navigate(["/mr/mr-login"]);
      return;
    }

    // if ( data.isEmailVerified === 'True') {

    //   this.router.navigate(["/mr/dashboard" ]);
    // }
  };

}

