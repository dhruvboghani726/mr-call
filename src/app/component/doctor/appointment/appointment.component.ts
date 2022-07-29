import { Component, OnInit, TemplateRef } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';


// interface select {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  myDate = new Date();
  constructor( public http: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  // Time_select: select[] = [
  //   {value: 'Weekly-0', viewValue: 'Weekly'},
  //   {value: 'Monthly-1', viewValue: 'Monthly'},
  //   {value: 'Yearly-2', viewValue: 'Yearly'},
  // ];


  // isVisible: boolean = false;
  // forceUnknownOption(){
  //   this.isVisible = true;
  // }


  accept(data,action){
    data.actiondialog = action
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      height: 'auto',
      width: '30%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.loader.hide();
     
    });
  }

}
