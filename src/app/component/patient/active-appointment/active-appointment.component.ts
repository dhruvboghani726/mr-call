import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppoinmentCancelDialogComponent } from './appoinment-cancel-dialog/appoinment-cancel-dialog.component';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { BookAppoinmentService } from '../../../shared/services/BookAppointment.service';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  appointmentDate: any;
  doctorName: string;
  hospital: string;
  terriory: string;
  startTime: any;
  endTime: any;
  status: string;
  reasonToCancel: string;
  Action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [];
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
  displayedColumns: string[] = ['appointmentDate', 'doctorName', 'hospital', 'terriory', 'startTime', 'endTime', 'status', 'reasonToCancel', 'Action',];
  dataSource = ELEMENT_DATA;
  appointmentId: any;
  viewappoinment: any = [];
  constructor(public dialog: MatDialog, private bookappoinmentService: BookAppoinmentService, public loader: LoaderService,) { }

  ngOnInit(): void {

    this.appointmentId = localStorage.getItem('apoimentId');
    console.log(this.appointmentId);
    this.Viewappoinment()
  }
  Viewappoinment() {


    this.loader.show();
    this.bookappoinmentService.MrViewappoinment(this.appointmentId)
      .pipe()
      .subscribe(res => {
        console.log(res);
        this.viewappoinment = res['data'];
        console.log(this.viewappoinment);
        this.loader.hide();
        return res;
      },
      )
  }

  opendialog() {
    const dialogRef = this.dialog.open(AppoinmentCancelDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
