import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, ValidationErrors } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegistarionForm: FormGroup;
  hide = true;

  ngOnInit(): void {
    this.InitForm();
  }
  constructor(
    public router: Router, private service: LoginService, private _snackBar: MatSnackBar) { }
  InitForm() {
    this.RegistarionForm = new FormGroup({
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  get f() {
    return this.RegistarionForm.controls;
  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [ 'green-snackbar' ]
  });
  }

  // openSnackBarError(message: string, action) {
  //   this._snackBar.open(message, action, {
  //     duration: 5000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     panelClass: [ 'red-snackbar' ]
  // });
  // }

  submit() {
    this.service.registerUser(this.f.PhoneNumber.value, this.f.Password.value, this.f.Name.value)
      .pipe()
      .subscribe(
        data => {

          this.openSnackBar('Registration successfully', '')
          this.router.navigate(['mr/mr-login']);
        })
  }    
    
    // async submit() {
    //   try {
    //     console.log(this.RegistarionForm.valid);

    //     if (this.RegistarionForm.valid) {

    //       var data = {
    //         firstName: this.RegistarionForm.value.FirstName,
    //         lastName: this.RegistarionForm.value.LastName,
    //         displayName: this.RegistarionForm.value.FirstName,
    //         userPrincipalName: this.RegistarionForm.value.username,
    //         password: this.RegistarionForm.value.Password,
    //         username: this.RegistarionForm.value.username,
    //         timeZone: this.Timezone
    //       }
    //       console.log(data)
    //       this.patientService.register(data).subscribe(res => {
    //         this.messageService.showMessage({
    //           icon: 'success',
    //           text: 'User register SuccessFully',
    //         });
    //         this.router.navigateByUrl('patient/patient-login')
    //       },
    //         errorRes => {
    //           if (errorRes.error.data != null) {
    //             this.messageService.showMessage({
    //               icon: 'error',
    //               text: errorRes.error.data[Object.keys(errorRes.error.data)[0]].errors[0].errorMessage,
    //             });
    //           }
    //           else if (errorRes.error.errors != null) {
    //             this.messageService.showMessage({
    //               icon: 'error',
    //               text: errorRes.error.errors.Message[0],
    //             });
    //           }
    //         });

    //     }
    //     else {
    //       var errorMessage = "Getting Error while Adding user";
    //       if (this.RegistarionForm.controls.FirstName.invalid) {
    //         errorMessage = "First name should not contain numbers or special characters"
    //       }
    //       else if (this.RegistarionForm.controls.LastName.invalid) {
    //         errorMessage = "Last name should not contain numbers or special characters"
    //       }
    //       this.messageService.showMessage({
    //         icon: 'error',
    //         text: errorMessage,
    //       });
    //     }
    //   } catch (error) {
    //     this.messageService.showMessage({
    //       icon: 'error',
    //       text: 'getting Error while Adding user',
    //     });
    //     this.RegistarionForm.reset();
    //   }
    // }

}
