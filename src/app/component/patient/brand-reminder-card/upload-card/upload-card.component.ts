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
  { Position: 1, Date: 'John Deo', Doctorname: 'John Deo', Hospital: 'Civil', Territory: 'surat', Timeslot: '2:30 to 3:00', Status: 'Done', Cancel: 'Not Avalible' },
  { Position: 2, Date: 'John Deo', Doctorname: 'John Deo', Hospital: 'Civil', Territory: 'surat', Timeslot: '2:30 to 3:00', Status: 'Done', Cancel: 'Not Avalible' },
];
@Component({
  selector: 'app-upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.scss']
})
export class UploadCardComponent implements OnInit {
  public username = '';
  public password = '';
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
