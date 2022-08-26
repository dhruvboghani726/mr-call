import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BookAppoinmentService } from 'src/app/shared/services/BookAppointment.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  myDate = new Date();
  doctorId: any;
  ViewAppoinmentDr: any = [];
  submitted = true;

  constructor(public http: HttpClient,
    public dialog: MatDialog, private bookappoinmentService: BookAppoinmentService, public loader: LoaderService,) { }

  ngOnInit(): void {
    // this.submitted = true;

    this.doctorId = JSON.parse(localStorage.getItem('currentDoctor')).data.id
    this.DrViewappoinment();
    console.log(this.doctorId);
  }
  DrViewappoinment() {
    this.doctorId = this.doctorId
    this.loader.show();
    this.bookappoinmentService.DrViewappoinment(this.doctorId)
      .pipe()
      .subscribe(res => {
        console.log(res);
        this.ViewAppoinmentDr = res['data'];
        console.log(this.ViewAppoinmentDr);
        this.loader.hide();
        return res;
      },
      )
  }
  accept(data, action, item) {
    data.actiondialog = action
    data.appointmentData = item

    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      height: 'auto',
      width: '30%',
      data: data,


    });
    dialogRef.afterClosed().subscribe(result => {
      // this.loader.hide();

    });
  }

}
