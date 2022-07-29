import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetalldoctorService } from '../../../shared/services/Getalldoctor.service';
import { FavoritedoctorService } from '../../../shared/services/favoritedoctor.service';

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

  constructor(private getalldoctorService: GetalldoctorService, private favoritedoctorService: FavoritedoctorService) { }

  ngOnInit(): void {
    this.Getalldoctor()
  }
  Getalldoctor() {
    this.getalldoctorService.Getalldoctor().pipe().subscribe(res => {
      console.log(res);
      this.doctorlist = res['data'];
      console.log(this.doctorlist);

    },
      error => {
        console.log('cannot work this api');

      })
  }
  FavoriteDoctor() {
    this.favoritedoctorService.FavoriteDoctor(this.doctorId, this.mrId,)
      .pipe()
      .subscribe(res => {
        console.log(res);
      })
  }
}

