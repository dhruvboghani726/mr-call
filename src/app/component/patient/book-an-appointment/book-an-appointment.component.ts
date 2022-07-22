import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {
  value
  currenttime;
  hour: any;
  minDate = new Date();
  interval;
  timeget = false;

  constructor(private router: Router,) {
  }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currenttime = new Date();
      // console.log(this.currenttime);
      this.currenttime.setDate(this.currenttime.getDate() + 1)

      this.hour = this.currenttime.getHours();
      // console.log(this.currenttime.getHours());


      if (this.hour > 14 || this.hour < 9) {
        this.timeget = true

        // console.log('show');
      }
      else if (this.hour < 15) {
        this.timeget = false
      }
    }, 5000);
  }

  Bookappoinment() {

    console.log('book appoinment successfully')

  }
}
