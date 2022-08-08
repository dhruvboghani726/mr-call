import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser, SocialLoginModule } from 'angularx-social-login';
import { LoginService } from '../../../shared/services/login.service';
import { first } from 'rxjs/operators';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<any>;
  // minPw = 8;
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

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private socialAuthService: SocialAuthService,
    private service: LoginService, private snackService: SnackbarService, public loader: LoaderService) {
  }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm() {
    this.LoginForm = this.fb.group({
      PhoneNumber: ['', (Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10))],
      Password: ['', (Validators.required, Validators.minLength(8))]
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
    // console.log(this.f)
    if (this.f.PhoneNumber.value, this.f.Password.value) {
      // console.log(this.f.Password.value);
      this.service.userLogin(this.f.PhoneNumber.value, this.f.Password.value)
        .pipe(first())
        .subscribe(value => {
          console.log(value);
          // this.router.navigate(['mr/dashboard']);
          if (value.data.message == 'Login successfully.') {
            // alert('logged in successfully..');
            this.snackService.openSnackBar('Login successfully', '')
            this.router.navigate(['mr/dashboard']);
          } else {
            alert('login failed');
          }
        },
          error => {
            console.log(error.message)
            console.log(error.error)
            this.snackService.openSnackBarError('User name is not found', '')
          })
    }// console.log('login fail');

  };
}

