import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {
  value
  // disableSelect = new FormControl(false);
  currenttime = new Date();
  hour: number;
  constructor() {
  }


  ngOnInit(): void {
    console.log(this.currenttime);
    this.currenttime.setDate(this.currenttime.getDate() + 1)

    this.hour = this.currenttime.getHours();
    console.log(this.currenttime.getHours());


    setInterval(() => {

      if (this.hour > 14 || this.hour < 9) {
        this.hour = this.currenttime.getHours();
        console.log('show')
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.hour);
    console.log('hide')
  }

  Bookappoinment() {

    console.log('book appoinment successfully')

  }
}
