import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {

  value
  disableSelect = new FormControl(false);
  constructor() {
   
  }
  ngOnInit(): void {
  }

}
