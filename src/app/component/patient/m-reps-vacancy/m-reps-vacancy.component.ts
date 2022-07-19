import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  No: number;
  Companyname: string;
  Division: string;
  City: string;
  State: string;
  VacancyDetails: string;
  Contactno: number;
  Addedby: string;
  Expireson: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { No: 1, Companyname: 'Torrent Pharma', Division: 'John Deo', City: 'Surat', State: 'Gujrat', VacancyDetails: 'pharma field 6 year Experince', Contactno: 9956565656, Addedby: 'sanket patel', Expireson: '21-jul-2022' },
  { No: 2, Companyname: 'Zydus', Division: 'Black Penther', City: 'Ahemadbad', State: 'Gujrat', VacancyDetails: 'chemical field 4 year Experince', Contactno: 9595955684, Addedby: 'tushar punchal', Expireson: '21-jul-2022' },

];
@Component({
  selector: 'app-m-reps-vacancy',
  templateUrl: './m-reps-vacancy.component.html',
  styleUrls: ['./m-reps-vacancy.component.scss']
})
export class MRepsVacancyComponent implements OnInit {
  value
  FirstName: any;
  LastName: any;
  foods: Food[] = [
    { value: 'steak-0', viewValue: '10' },
    { value: 'pizza-1', viewValue: '20' },
    { value: 'tacos-2', viewValue: '30' },
  ];
  displayedColumns: string[] = ['No', 'Companyname', 'Division', 'City', 'State', 'VacancyDetails', 'Contactno', 'Addedby', 'Expireson'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
