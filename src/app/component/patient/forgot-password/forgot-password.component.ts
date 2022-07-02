import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  hidecon = true;
  hide = true;
  hidecurrent = true;
  public forgotForm: FormGroup;
  public password;
  public c_password;
  public Currentpassword
  phonetype;
  emailtype;
  public error: string;
  passwordPattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9\d$@$!%*?&].{7,}'

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
  }

  public Send() {
    this.router.navigate(['/mr/mr-otp']);
  }

  get f() { return this.forgotForm.controls; }
  public onInputChange(event) {
    event.target.required = true;
  }
}
