import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Position: number;
  Doctorname: string;
  Hospital: string;
  Degree: string;
  Specialization: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { Position: 1, Doctorname: 'John Deo', Hospital: 'Civil', Degree: 'MBBS', Specialization: 'Dental Sciences', action: 'Done', },
  { Position: 2, Doctorname: 'John Deo', Hospital: 'Civil', Degree: 'MD', Specialization: 'Nurology', action: 'Done', },
];
@Component({
  selector: 'app-smydoctor-list',
  templateUrl: './mydoctor-list.component.html',
  styleUrls: ['./mydoctor-list.component.scss']
})
export class MydoctorListComponent implements OnInit {
  value
  displayedColumns: string[] = ['Position', 'Doctorname', 'Hospital', 'Degree', 'Specialization', 'action',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
