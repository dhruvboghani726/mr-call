import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {

  value
  disableSelect = new FormControl(false);
  currenttime = new Date();
  startTime = new Date();
  endTime = new Date();
  hour = 0;
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.currenttime);
    this.currenttime.setDate(this.currenttime.getDate() + 1)


    this.hour = this.currenttime.getHours();


    console.log(this.startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true }));
    console.log(this.endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true }));


    console.log(this.currenttime.getHours())



  }
  // padTo2Digits(num: number) {
  //   return num.toString().padStart(2, '0');
  // }


  // formatDate(date: Date) {
  //   return (
  //     [
  //       date.getFullYear(),
  //       this.padTo2Digits(date.getMonth() + 1),
  //       this.padTo2Digits(date.getDate()),
  //     ].join('-')
  //     // ' ' +
  //     // [
  //     //   this.padTo2Digits(date.getHours()),
  //     //   this.padTo2Digits(date.getMinutes()),
  //     //   this.padTo2Digits(date.getSeconds()),
  //     // ].join(':')
  //   );
  // }
}