import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppoinmentCancelDialogComponent } from './appoinment-cancel-dialog/appoinment-cancel-dialog.component';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { BookAppoinmentService } from '../../../shared/services/BookAppointment.service';
import { MatTableDataSource } from '@angular/material/table';
import { Drviewappoinment } from 'src/app/shared/_models/DrViewappoinment';

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
  allAppointments: any;
  value
  foods: Food[] = [
    { value: 'steak-0', viewValue: '10' },
    { value: 'pizza-1', viewValue: '20' },
    { value: 'tacos-2', viewValue: '30' },
  ];
  appointmentId: any;
  getCurrentMrID: String;
  viewappoinment: any = [];
 
  constructor(public dialog: MatDialog, private bookappoinmentService: BookAppoinmentService, public loader: LoaderService,) { }

  ngOnInit(){

    this.appointmentId = localStorage.getItem('apoimentId');
    this.getCurrentMrID = JSON.parse(localStorage.getItem('currentMr')).data.id;
    console.log(JSON.parse(localStorage.getItem('currentMr')).data.id)
    console.log(this.appointmentId);
    this.ViewAppointment()
  }
  displayedColumns: string[] = ['appointmentDate', 'doctorName', 'hospital', 'terriory', 'startTime', 'endTime', 'status', 'reasonToCancel', 'Action',];
  dataSource = new MatTableDataSource<Drviewappoinment>([]);

  ViewAppointment() {
    this.loader.show();
    // this.bookappoinmentService.MrViewappoinment(this.getCurrentMrID)
    //   .pipe()
    //   .subscribe(res => {
    //     console.log(res);
    //     this.viewappoinment = res['data'];
    //     console.log(this.viewappoinment);
    //     this.loader.hide();
    //     return res;
    //   },
    //   )

    // Get All  APIs
      this.bookappoinmentService.DrAllAppointment<Drviewappoinment>(`api/MR/ViewAllAppointment?mrId=${this.getCurrentMrID}`)
      .subscribe((data: Drviewappoinment[]) => {
        this.allAppointments = data as Drviewappoinment[];
        this.dataSource.data = this.allAppointments.data
        this.loader.hide();
      })
  }

  opendialog(element) {
    const dialogRef = this.dialog.open(AppoinmentCancelDialogComponent,{
      data:element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ViewAppointment();
    })
  }

}
