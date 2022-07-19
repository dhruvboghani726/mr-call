import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, ValidationErrors } from "@angular/forms";
import { Router } from '@angular/router';
import { CONSTANT } from '~app/shared/utils/constant';

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
    public router: Router) { }
  InitForm() {
    this.RegistarionForm = new FormGroup({
      MobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      FirstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      LastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      username: new FormControl(''),
      userEmail: new FormControl(''),
      Password: new FormControl(''),
    });
  }
  get f() {
    return this.RegistarionForm.controls;
  }

  submit() {
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

}
