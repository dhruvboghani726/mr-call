import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppoinmentCancelDialogComponent } from './appoinment-cancel-dialog/appoinment-cancel-dialog.component';
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
  Action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { Position: 1, Date: '2-5-2022', Doctorname: 'John Deo', Hospital: 'Civil', Territory: 'surat', Timeslot: '2:30 to 3:00', Status: 'Done', Cancel: 'Not Avalible', Action: '' },
  { Position: 2, Date: '2-5-2022', Doctorname: 'John Deo', Hospital: 'Civil', Territory: 'surat', Timeslot: '2:30 to 3:00', Status: 'Done', Cancel: 'Wrong Time Select', Action: '' },
];
@Component({
  selector: 'app-active-appointment',
  templateUrl: './active-appointment.component.html',
  styleUrls: ['./active-appointment.component.scss']
})


export class ActiveAppointmentComponent implements OnInit {
  value
  foods: Food[] = [
    { value: 'steak-0', viewValue: '10' },
    { value: 'pizza-1', viewValue: '20' },
    { value: 'tacos-2', viewValue: '30' },
  ];
  displayedColumns: string[] = ['Position', 'Date', 'Doctorname', 'Hospital', 'Territory', 'Timeslot', 'Status', 'Cancel', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  opendialog() {
    const dialogRef = this.dialog.open(AppoinmentCancelDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
