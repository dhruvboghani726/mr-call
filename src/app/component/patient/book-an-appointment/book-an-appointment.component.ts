import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BookAppoinmentService } from '../../../shared/services/BookAppointment.service';
import { GetalldoctorService } from 'src/app/shared/services/Getalldoctor.service';
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
  data: any;
  DoctorId: any;
  Mrid: any;
  favoritetimeslot: string;
  timeslots: string[] = ['3:00 to 4:00', '4:00 to 5:00', '5:00 to 6:00', '6:00 to 7:00'];
  AppointmentDate: string;
  StartTime: any;
  EndTime: number;
  doctorlist: any = [];
  Doctorname: any;
  Doctordegree: any;
  Speciality: any;


  constructor(private router: Router, private service: BookAppoinmentService, private getallDoctorsService: GetalldoctorService) {
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

    this.Getalldoctor();

  }

  radioChange(event, data) {

    console.log(this.favoritetimeslot);

  }
  // book appointment api
  BookAppointment() {
    this.service.BookAppointment(this.DoctorId, this.Mrid, this.AppointmentDate, this.StartTime, this.EndTime)
      .pipe(first())
      .subscribe(value => {
        console.log(value);
      })
    console.log('book appoinment successfully')
  }
  Getalldoctor() {
    this.getallDoctorsService.Getalldoctor().pipe().subscribe(res => {
      console.log(res);
      this.doctorlist = res['data'];
      console.log(this.doctorlist);

      // this.Doctorname = res.data.doctorName;
      // this.Doctordegree = res.data.degree;
      // this.Speciality = res.data.speciality;
      // this.location =res.data.street1
      // this.location =res.data.street2
      // this.location =res.data.city

    },
      error => {
        console.log('cannot work this api');

      })
  }
}
