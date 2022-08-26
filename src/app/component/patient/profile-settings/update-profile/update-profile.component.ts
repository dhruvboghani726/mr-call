import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UpdateProfileService } from 'src/app/shared/services/update-profile.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  MrProfileFormGroup: any;
  productForm: any;
  Name: string;
  phonenumber: string;
  Email: string;
  company: string;
  division: string;
  speciality: string;
  City: string;
  city2: string;
  city3: string;
  city4: string;
  dob: string;
  Mrid: any;
  userData: any;
  userName:any;
  // ProductsName: any;
  constructor(private updateprofileService: UpdateProfileService, private fb: FormBuilder, snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.Mrid = JSON.parse(localStorage.getItem('currentMr')).data.id
    this.GetUserData()
    this.MrProfileFormGroup = this.fb.group({
      Name: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      Email: new FormControl(''),
      dob: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      speciality: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      city2: new FormControl('', Validators.required),
      city3: new FormControl('', Validators.required),
      city4: new FormControl('', Validators.required),
      // ProductsName: new FormControl(''),
    })
    this.productForm = this.fb.group({
      product1: new FormControl('', Validators.required),
      product2: new FormControl('', Validators.required),
      product3: new FormControl('', Validators.required),
      product4: new FormControl('', Validators.required),
      product5: new FormControl('', Validators.required),
      product6: new FormControl('', Validators.required),
      product7: new FormControl('', Validators.required),
      product8: new FormControl('', Validators.required),
      product9: new FormControl('', Validators.required),
      product10: new FormControl('', Validators.required),
    })
  }

  // Get User data API
  GetUserData(){
    this.updateprofileService.GetProfileData<any>(`api/MR/ViewMrProfile?mrId=${this.Mrid}`)
    .subscribe((data: any[]) => {
      
      this.userData = data;
      console.log(this.userData.data.name,"user data")
      this.Name = this.userData.data.name;
    })
  }

   //Formcontrol 
   get productFormControl() {
    return this.productForm.controls;
  }
   //Formcontrol 
   get MrProfileFormControl() {
    return this.MrProfileFormGroup.controls;
  }

  updateProfile() {
    let convert = this.Mrid;
    var formData: any = new FormData();
    formData.append("Mrid", convert);
    formData.append("Name", "");
    formData.append("phonenumber", "");
    formData.append("company", "");
    formData.append("dob", "");
    formData.append("division","");
    formData.append("speciality","");
    formData.append("City","");
    formData.append("ProductsName","");
    formData.append("ProductsName","");
    console.log(formData,"formData")
    console.log(this.MrProfileFormControl,"MrProfileFormGroup")
    console.log(this.productForm,"productForm")
    console.log(this.MrProfileFormGroup,"MrProfileFormGroup")
    this.updateprofileService.UpdateProfile(formData)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data,"data")
          },
          error => {
          }
        );
        console.log(formData,"formData")
    }
    // if (this.MrProfileFormGroup.valid) {
    //   var Mrid = this.Mrid;
    //   // this.updateprofileService.updateProfile(this.Mrid, this.Name, this.company, this.phonenumber, this.dob, this.division, this.speciality, this.City)
    //   //   .pipe(first())
    //   //   .subscribe(res => {
    //   //     console.log(res);
    //   //     return res;
    //   //   });
    //   // }
    //   // var data = this.MrProfileFormGroup.value;

    //   // console.log(data);
    // }
}
