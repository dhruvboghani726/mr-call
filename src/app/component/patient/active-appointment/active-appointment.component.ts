import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  Position: number;
  Date: any;
  Doctorname: string;
  Hospital: string;
  Territory: string;
  Timeslot: any;
  Status: string;
  Cancel: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { Position: 1, Date: '2-5-2022', Doctorname: 'John Deo', Hospital: 'Civil', Territory: 'surat', Timeslot: '2:30 to 3:00', Status: 'Done', Cancel: 'Not Avalible' },
  { Position: 1, Date: '2-5-2022', Doctorname: 'John Deo', Hospital: 'Civil', Territory: 'surat', Timeslot: '2:30 to 3:00', Status: 'Done', Cancel: 'Not Avalible' },
];
@Component({
  selector: 'app-active-appointment',
  templateUrl: './active-appointment.component.html',
  styleUrls: ['./active-appointment.component.scss']
})


export class ActiveAppointmentComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: '10' },
    { value: 'pizza-1', viewValue: '20' },
    { value: 'tacos-2', viewValue: '30' },
  ];
  displayedColumns: string[] = ['Position', 'Date', 'Doctorname', 'Hospital', 'Territory', 'Timeslot', 'Status', 'Cancel'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
