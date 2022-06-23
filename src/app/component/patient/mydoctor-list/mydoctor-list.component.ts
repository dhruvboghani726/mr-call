import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

interface Food {
  value: string;
  viewValue: string;
}
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
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'All' },
    { value: 'pizza-1', viewValue: 'Any One ' },
    { value: 'tacos-2', viewValue: 'Multiple' },
  ];
  entrys: Food[] = [
    { value: 'steak-0', viewValue: '10' },
    { value: 'pizza-1', viewValue: '20' },
    { value: 'tacos-2', viewValue: '30' },
  ];
  displayedColumns: string[] = ['Position', 'Doctorname', 'Hospital', 'Degree', 'Specialization', 'action',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
