import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BookAppoinmentService } from '../../../shared/services/BookAppointment.service';
import { GetalldoctorService } from 'src/app/shared/services/Getalldoctor.service';
import { MatRadioChange } from '@angular/material/radio';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { DatePipe } from '@angular/common'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss'],
  providers: [DatePipe]
})
export class BookAnAppointmentComponent implements OnInit {
  value
  currenttime;
  hour: any;
  minDate = new Date();
  interval;
  timeget = false;
  data: any;
  // DoctorId: any;
  // Mrid: any
  favoritetimeslot: string;
  timeslots: string[] = [];
  AppointmentDate: string;
  StartTime: any;
  EndTime: any;
  doctorlist: any = [];
  FavdoctorList: any = [];
  Doctorname: any;
  Doctordegree: any;
  Speciality: any;
  currentMr: any;
  // doctorId: any;
  selected: string;
  mrId: any;
  item: any;
  city: any;
  count: any;
  searchdataForm: FormGroup;
  DatePickerForm: FormGroup;
  searchvalue: any;
  cityvalue: any;
  slottime: any;
  DoctorId: string;
  Mrid: string;
  doctorId: any;
  loading$ = this.loader.isLoading;
  appointmentId: string;
  date: string | number | Date;
  events: string[] = [];
  setDate: any;

  constructor(private router: Router, private bookappoinmentService: BookAppoinmentService, public datepipe: DatePipe, private snackService: SnackbarService, public loader: LoaderService, public fb: FormBuilder, private getallDoctorsService: GetalldoctorService,) {
  }

  ngOnInit(): void {
    this.searchdataForm = this.fb.group({
      search: [''],
      city: ['',]

    });
    this.DatePickerForm = this.fb.group({
      DateForm: [''],
    });
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



    this.mrId = JSON.parse(localStorage.getItem('currentMr')).data.id
    // this.doctorlistbymr();
    // this.serchDoctor();
    // this.Getalldoctor(); // all doctor show api function

  }
  get f() {
    return this.searchdataForm.controls;
  }
  get form_date() {
    return this.DatePickerForm.controls;
  }
  timesloatChange(event: MatRadioChange) {
    var slottime = event.value;
    console.log(slottime['startTime']);
    console.log(slottime['endTime']);

    this.StartTime = slottime['startTime'];
    this.EndTime = slottime['endTime'];
    // console.log(event);


  }
  // book appointment api
  BookAppointment(data) {
    this.loader.show();
    console.log(data['id']);
    console.log(data['2022/08/09']);
    this.DoctorId = data['id'];
    this.Mrid = this.mrId;
    this.date = data['date'];
    this.AppointmentDate = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.bookappoinmentService.BookAppointment(this.DoctorId, this.Mrid, this.AppointmentDate, this.StartTime, this.EndTime)
      .pipe(first())
      .subscribe(res => {
        console.log(res['appointmentId']);
        localStorage.setItem("apoimentId", res['appointmentId']);
        this.loader.hide();
        alert('book appoinment successfully')
      })
  }

  // Getalldoctor() {
  //   this.getallDoctorsService.Getalldoctor().pipe().subscribe(res => {
  //     console.log(res);
  //     this.doctorlist = res['data'];
  //     console.log(this.doctorlist);

  //   },
  //     error => {
  //       console.log('cannot work this api');

  //     })
  // }

  // doctorlistbymr() {
  //   this.loader.show();
  //   var mrId = this.mrId;
  //   this.bookappoinmentService.doctorlistbymr(mrId)
  //     .pipe(first())
  //     .subscribe(res => {
  //       this.FavdoctorList = res['data'];
  //       this.count = res.count;
  //       // console.log(this.count);

  //       console.log(this.FavdoctorList);
  //       console.log(res);
  //       this.loader.hide();
  //       return res;
  //     });
  // }

  Cityfilter(event) {
    this.loader.show();
    console.log(event.targe);
    this.searchvalue = this.searchdataForm.value
    var city = this.searchvalue['city'];
    var data = this.searchvalue['search'];
    this.bookappoinmentService.SearchDoctor(city ?? "", data ?? "", this.mrId)
      .pipe(first())
      .subscribe(res => {
        this.FavdoctorList = [];
        this.FavdoctorList = res['data'];
        ///this.count = res.count;
        // console.log(res['data']);
        this.loader.hide();
      });
  }

  serchDoctorfilter() {
    this.loader.show();
    this.searchvalue = this.searchdataForm.value
    var city = this.searchvalue['city'];
    var data = this.searchvalue['search'];
    this.bookappoinmentService.SearchDoctor(city ?? "", data ?? "", this.mrId)
      .pipe(first())
      .subscribe(res => {
        this.FavdoctorList = [];
        this.FavdoctorList = res['data'];
        ///this.count = res.count;
        // console.log(res['data']);
        this.loader.hide();
      });
  }

  // Filter Doctor List click event to search doctor 
  FilterDoctorList(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    this.AppointmentDate = this.datepipe.transform(`${event.value}`, 'yyyy-MM-dd');
    // console.log(this.AppointmentDate)
    if(this.AppointmentDate  !== null){
      this.loader.show();
      this.bookappoinmentService.SearchDoctorByDate(this.AppointmentDate, this.mrId)
      .pipe(first())
      .subscribe(res => {
        this.FavdoctorList = [];
        this.FavdoctorList = res['data'];
        ///this.count = res.count;
        console.log(res['data']);
        this.loader.hide();
      });
    }

  }
}

