import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser, SocialLoginModule } from 'angularx-social-login';
import { LoginService } from '../../../shared/services/login.service';
import { first } from 'rxjs/operators';
import { SnackbarService } from '../../../shared/services/snackbar.service';


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
  socialUser: SocialUser;
  isLoggedin: boolean;
  // private user: SocialUser;
  public authorized: boolean = false;
  errors: any;
  contentTemplate: TemplateRef<any>;
  returnUrl: any;

  public user: SocialUser = new SocialUser;
  googleLoginOptions: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private socialAuthService: SocialAuthService,
    private service: LoginService, private snackService: SnackbarService) {
  }

  ngOnInit(): void {
    this.InitForm();
    // this.socialAuthService.authState.subscribe(user => {
    //   this.user = user;
    //   console.log(user);
    // });
  }

  InitForm() {
    this.LoginForm = this.fb.group({
      PhoneNumber: ['', Validators.required,],
      Password: ['', Validators.required]
    });
  }

  public loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (res) => {
        console.log(res);
        this.router.navigate(["/doctor/doctor-dashboard"]);
      }

    );
    // if (socialPlatform == "google") {
    //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = (user != null);
    //   console.log(this.socialUser);
    //   this.router.navigate([this.returnUrl]);
    // });

    // this.socialAuthService.signIn(socialPlatformProvider).then(
    //   (userData) => {
    //     console.log(socialPlatform + " sign in data : ", userData);
    //     // Now sign-in with userData        
    //     if (userData != null) {
    //       this.authorized = true;
    //       this.user = userData;
    //     }
    //     this.router.navigate([this.returnUrl]);
    //   }
    // );
  }

  get f() {
    return this.LoginForm.controls;
  }

  submit() {
    if (this.LoginForm.invalid) {
      this.router.navigate(["/doctor/doctor-login"]);
      return;
    }

    if (this.f.PhoneNumber.value, this.f.Password.value) {
      // console.log(this.f.Password.value);
      this.service.doctorLogin(this.f.PhoneNumber.value, this.f.Password.value)
      .pipe(first())
      .subscribe(value => {
        console.log(value);
        if(value.data.message == 'Login successfully.'){
          this.snackService.openSnackBar('Login successfully', '')
          this.router.navigate(['doctor/doctor-dashboard']);
        }else{ 
          alert('login failed');
        }
      },
      error => {
        console.log(error.message)
        console.log(error.error)
        this.snackService.openSnackBarError('User name is not found', '')
      })
    }
  };


}

