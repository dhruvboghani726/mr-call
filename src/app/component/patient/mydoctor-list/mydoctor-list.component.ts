import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetalldoctorService } from '../../../shared/services/Getalldoctor.service';
import { FavoritedoctorService } from '../../../shared/services/favoritedoctor.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  doctorName: string;
  hospitalName: string;
  degree: string;
  speciality: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  // { Position: 1, Doctorname: 'John Deo', Hospital: 'Civil', Degree: 'MBBS', Specialization: 'Dental Sciences', action: 'Done', },
  // { Position: 2, Doctorname: 'John Deo', Hospital: 'Civil', Degree: 'MD', Specialization: 'Nurology', action: 'Done', },
];
@Component({
  selector: 'app-smydoctor-list',
  templateUrl: './mydoctor-list.component.html',
  styleUrls: ['./mydoctor-list.component.scss']
})
export class MydoctorListComponent implements OnInit {
  value
  displayedColumns: string[] = ['doctorName', 'hospitalName', 'degree', 'speciality', 'action',];
  dataSource = ELEMENT_DATA;
  doctorId: any;
  doctorName: any;
  speciality: any;
  hospitalName: any;
  doctorlist: any = [];
  mrId: any;
  isLoading = true;
  error: any;
  constructor(private getalldoctorService: GetalldoctorService, private router: Router, private route: ActivatedRoute, private snackService: SnackbarService, public loader: LoaderService, private favoritedoctorService: FavoritedoctorService) { }

  ngOnInit(): void {
    this.Getalldoctor()
    this.mrId = JSON.parse(localStorage.getItem('currentMr')).data.id
  }
  Getalldoctor() {
    this.loader.show();
    this.getalldoctorService.Getalldoctor().pipe().subscribe(res => {
      console.log(res);
      this.doctorlist = res['data'];
      console.log(this.doctorlist);
      this.loader.hide();
    },
      error => {
        console.log('cannot work this api');

      })
  }
  FavoriteDoctor(doctorId) {
    this.loader.show();
    this.favoritedoctorService.FavoriteDoctor(doctorId, this.mrId,)
      .pipe()
      .subscribe((res: any) => {
        console.log(res);
        this.loader.hide();
        if (res.data.message == 'Doctor added in your list.') {
          this.snackService.openSnackBar('Doctor added in your list.', '')
        }
      },
        error => {
          console.log(error.message)
          console.log(error.error)
          this.snackService.openSnackBarError('Doctor is already added in your list.', '')

        }
      )

  }
}

