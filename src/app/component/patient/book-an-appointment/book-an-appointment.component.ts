import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {
  value
  // disableSelect = new FormControl(false);
  currenttime = new Date();
  hour = 0;
  constructor() {
  }


  ngOnInit(): void {


    console.log(this.currenttime);
    this.currenttime.setDate(this.currenttime.getDate() + 1)

    this.hour = this.currenttime.getHours();
    console.log(this.currenttime.getHours())
  }


  Bookappoinment() {

    console.log('book appoinment successfully')

  }
}