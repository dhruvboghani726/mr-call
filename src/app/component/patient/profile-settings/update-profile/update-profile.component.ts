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
  // ProductsName: any;
  constructor(private updateprofileService: UpdateProfileService, private fb: FormBuilder, snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.Mrid = JSON.parse(localStorage.getItem('currentMr')).data.id
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


  }
  updateProfile() {

    if (this.MrProfileFormGroup.valid) {
      var Mrid = this.Mrid;
      // this.updateprofileService.updateProfile(this.Mrid, this.Name, this.company, this.phonenumber, this.dob, this.division, this.speciality, this.City)
      //   .pipe(first())
      //   .subscribe(res => {
      //     console.log(res);
      //     return res;
      //   });
      // }
      var data = this.MrProfileFormGroup.value;
      console.log(data);
    }
  }
}
