import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser, SocialLoginModule } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<any>;
  hide = true;
  LoginForm!: FormGroup;
  error: string;
  socialUser: SocialUser;
  isLoggedin: boolean;
  public authorized: boolean = false;
  errors: any;
  contentTemplate: TemplateRef<any>;
  returnUrl: any;
  public user: SocialUser;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private socialAuthService: SocialAuthService) {
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
  public loginWithGoogle(socialPlatform: string): void {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
    //   (res) => {
    //     console.log(res);
    //     this.router.navigate(["/mr/mr-dashboard"]);
    //   }

    // );
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);

      this.router.navigate(['/mr/dashboard']);
    });

    // this.socialAuthService.signIn(socialPlatformProvider).then(
    //   (userData) => {
    //     console.log(socialPlatform + " sign in data : ", userData);
    //     // Now sign-in with userData        
    //     if (userData != null) {
    //       this.authorized = true;
    //       this.user = userData;
    //     }
    //     console.log(userData)
    //     this.router.navigate(['/mr/dashboard']);
    //   }
    // );
  }
  submit() {
    if (this.LoginForm.invalid) {
      return;
    }
    console.log('login fail');

  };
}

