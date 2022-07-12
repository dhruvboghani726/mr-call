import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CountdownComponent } from 'ngx-countdown';

export interface Food {
  value: string;
  display: string;
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ]
})
export class ForgotPasswordComponent implements OnInit {
  hidecon = true;
  hide = true;
  hidecurrent = true;
  public forgotForm: FormGroup;
  UsercheckemailForm: FormGroup;
  OtpsubmitForm: FormGroup;
  public password;
  public c_password;
  public Currentpassword
  phonetype;
  emailtype;
  public error: string;
  passwordPattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9\d$@$!%*?&].{7,}'
  title = 'materialApp';
  otp: any;
  showOtpComponent = true;
  show = true;
  checked = false;
  durationInSeconds = 5;
  selectedValue: number;
  isEditable: false;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  constructor(public fb: FormBuilder,
    public router: Router) {
    this.forgotForm = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordPattern)
        // Validators.pattern(CONSTANT.passwordPattern)

      ]),
      c_password: new FormControl('', [
        Validators.required,
        // Validators.pattern(CONSTANT.passwordPattern),
        Validators.pattern(this.passwordPattern),
        this.checkPasswords()
      ]),
    });
    this.password = this.forgotForm.get('password');
    this.c_password = this.forgotForm.get('c_password');
  }
  checkPasswords(): ValidatorFn {
    //see that the argument is a FormControl
    return (control: FormControl): ValidationErrors => {
      //the formGroup is control.parent
      const group = control.parent as FormGroup;
      //but we must sure that is defined
      if (!group) return null;

      let pass = group.get("password").value;
      let confirmPass = group.get("c_password").value;

      return confirmPass ? pass === confirmPass ? null : { mismatch: true } : null;
    };
  }

  ngOnInit(): void {
    this.forgotForm.valueChanges.subscribe(() => {
      this.error = null;
    });
    this.UsercheckemailForm = this.fb.group({
      username: ['', Validators.required],
    });
    this.OtpsubmitForm = this.fb.group({
      otp: ['', Validators.required]
    });
  }

  public Send() {
    this.router.navigate(['/mr/mr-login']);
  }
  submit() {
    if (this.UsercheckemailForm.valid) {

      var data = {
        username: this.UsercheckemailForm.value.username

      }
      this.router.navigate(['/mr/mr-otp']);
    }
  }

  get f() { return this.forgotForm.controls, this.UsercheckemailForm.controls; }

  public onInputChange(event) {
    event.target.required = true;
  }

  /*
    Resend OTP api
  */
  public Resend() {
    // this.counter.restart();
    // this.authenticationService.sendotp(this.email, this.userid, '')
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.spinner.hide();
    //     },
    //     error => {
    //       this.spinner.hide();
    //       this.error = "failed";
    //     });
  }

  // Counter timer
  onEvent($event): void {
    let timeLeft = $event.left;
    this.selectedValue = timeLeft
    if (timeLeft == 0) {

      this.show = false
    }
  }

  /*
   Enter OTP Check api
 */
  onOtpChange(otp) {
    this.otp = otp;

    // if (this.otp.length === 5) {
    //   this.authenticationService.emailotpvarify('email', localStorage.getItem("newEmail"), this.otp)
    //     .pipe(first())
    //     .subscribe(
    //       data => {
    //         if (data == false) {
    //         }
    //         else {
    //           this.openUpdateSnackBar("Email update successfully","")
    //           this.router.navigate(['/doctor/doctor-profile-setting'])
    //         }
    //       },
    //       error => {
    //       });
    // }
  }
}
