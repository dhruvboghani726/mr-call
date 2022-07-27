import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, ValidationErrors } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/patient/login.service';

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
    public router: Router, private service: LoginService) { }
  InitForm() {
    this.RegistarionForm = new FormGroup({
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      Password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      // username: new FormControl(''),
      // userEmail: new FormControl(''),
      // Password: new FormControl(''),
    });
  }
  get f() {
    return this.RegistarionForm.controls;
  }

  submit() {

    this.service.registerUser(this.f.PhoneNumber.value, this.f.Password.value, this.f.Name.value)
      // this.authenticationService.patientregister(this.f.email.value, this.f.Password.value, this.f.firstName.value, this.f.lastName.value, this.f.gender.value, this.f.birthdate.value, this.reg(this.f.phoneNumber.value), this.f.Street1.value, this.f.City.value, this.f.State.value, this.f.Zip.value)
      .pipe()
      .subscribe(
        data => {
          // localStorage.setItem('patientUserName', this.f.email.value)
          // localStorage.setItem('patientPhoneNumber', this.f.phoneNumber.value)

          // localStorage.setItem('pa_role', data.userRole)
          // localStorage.setItem('pa_id', data.userid)

          // this.spinner.hide();
          alert('registration successfully');
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
