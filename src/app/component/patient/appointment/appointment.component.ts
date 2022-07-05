import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// import { ToastrService } from 'ngx-toastr';
// import { AppointmentService } from 'src/app/shared/services/appointment.service';
// import { LoaderService } from 'src/app/shared/services/loader.service';
// import { MessageService } from 'src/app/shared/services/message.service';
// import { SearchDoctorService } from 'src/app/shared/services/search-doctor.service';
// import { StripeCard, StripeScriptTag } from 'stripe-angular';
// import { CommonServiceService } from './../../common-service.service';
declare var moment: any;

interface appioment {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appioments: appioment[] = [
    { value: '00:00:00-00:30:00', viewValue: '00:00' },
    { value: '00:30:00-01:00:00', viewValue: '00:30' },
    { value: '01:00:00-01:30:00', viewValue: '01:00' },
    { value: '01:30:00-02:00:00', viewValue: '01:30' },
    { value: '02:00:00-02:30:00', viewValue: '02:00' },
    { value: '02:30:00-03:00:00', viewValue: '02:30' },
    { value: '03:00:00-03:30:00', viewValue: '03:00' },
    { value: '03:30:00-04:00:00', viewValue: '03:30' },
    { value: '04:00:00-04:30:00', viewValue: '04:00' },
    { value: '04:30:00-05:00:00', viewValue: '04:30' },
    { value: '05:00:00-05:30:00', viewValue: '05:00' },
    { value: '05:30:00-06:00:00', viewValue: '05:30' },
    { value: '06:00:00-06:30:00', viewValue: '06:00' },
    { value: '06:30:00-07:00:00', viewValue: '06:30' },
    { value: '07:00:00-07:30:00', viewValue: '07:00' },
    { value: '07:30:00-08:00:00', viewValue: '07:30' },
    { value: '08:00:00-08:30:00', viewValue: '08:00' },
    { value: '08:30:00-09:00:00', viewValue: '08:30' },
    { value: '09:00:00-09:30:00', viewValue: '09:00' },
    { value: '09:30:00-10:00:00', viewValue: '09:30' },
    { value: '10:00:00-10:30:00', viewValue: '10:00' },
    { value: '10:30:00-11:00:00', viewValue: '10:30' },
    { value: '11:00:00-11:30:00', viewValue: '11:00' },
    { value: '11:30:00-12:00:00', viewValue: '11:30' },
    { value: '12:00:00-12:30:00', viewValue: '12:00' },
    { value: '12:30:00-13:00:00', viewValue: '12:30' },
    { value: '13:00:00-13:30:00', viewValue: '13:00' },
    { value: '13:30:00-14:00:00', viewValue: '13:30' },
    { value: '14:00:00-14:30:00', viewValue: '14:00' },
    { value: '14:30:00-15:00:00', viewValue: '14:30' },
    { value: '15:00:00-15:30:00', viewValue: '15:00' },
    { value: '15:30:00-16:00:00', viewValue: '15:30' },
    { value: '16:00:00-16:30:00', viewValue: '16:00' },
    { value: '16:30:00-17:00:00', viewValue: '16:30' },
    { value: '17:00:00-17:30:00', viewValue: '17:00' },
    { value: '17:30:00-18:00:00', viewValue: '17:30' },
    { value: '18:00:00-18:30:00', viewValue: '18:00' },
    { value: '18:30:00-19:00:00', viewValue: '18:30' },
    { value: '19:00:00-19:30:00', viewValue: '19:00' },
    { value: '19:30:00-20:00:00', viewValue: '19:30' },
    { value: '20:00:00-20:30:00', viewValue: '20:00' },
    { value: '20:30:00-21:00:00', viewValue: '20:30' },
    { value: '21:00:00-21:30:00', viewValue: '21:00' },
    { value: '21:30:00-22:00:00', viewValue: '21:30' },
    { value: '22:00:00-22:30:00', viewValue: '22:00' },
    { value: '22:30:00-23:00:00', viewValue: '22:30' },
    { value: '23:00:00-23:30:00', viewValue: '23:00' },
    { value: '23:30:00-00:00:00', viewValue: '23:30' },

  ];
  myFilter = (d: Date) => {
    const day = (d || new Date()).getDate();
    return day !== 21 && day !== 22;
  };

  doctorDetails;
  doctorId;
  patientId;
  patientDetailsFormGroup: FormGroup;
  showPage: boolean = false;
  // summaryDate: string = moment().format('DD MMM YYYY');
  // summaryTime: string = moment('0001-01-01T00:00:00').format('hh:mm A');
  // checkTerms: boolean = true;
  appointmentTime: any;
  token
  invalidError
  cardCaptureReady
  cardDetailsFilledOut
  currentUser: any;
  patientToken: any;
  addAppontmentId: any;
  doctorlastname: any;
  doctorcountry: any;
  doctorcity: any;
  doctorfirstname: any;
  doctorid: any;
  doctorpricing: any;
  appointmentTimeChange: string;
  appointmentDateChange: any;
  doctorTimeZone: any;
  dayWiseSchedule = [];
  data: any[];
  weekDay: any;
  minDate = new Date();
  isLoading = false;
  loading: boolean = false;
  Days = [
    { value: 1, day: 'Monday' },
    { value: 2, day: 'Tuesday' },
    { value: 3, day: 'Wednesday' },
    { value: 4, day: 'Thursday' },
    { value: 5, day: 'Friday' },
    { value: 6, day: 'Saturday' },
    { value: 7, day: 'Sunday' },
  ]
  dayChange: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    // private messageService: MessageService,
    // private loaderService: LoaderService,
    // public searchDoctorService: SearchDoctorService,
    // private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    // public commonService: CommonServiceService,
    // private toastr: ToastrService,
    // private stripeScriptTag: StripeScriptTag
  ) { }

  ngOnInit(): void {
    // this.doctorId = this.route.snapshot.queryParams['id'];
    // this.patientId = 1;
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.patientDetailsFormGroup = this.fb.group({
      // id: [0],
      // patientId: [this.currentUser.userId],
      // doctorId: [this.doctorId],
      appointmentDate: [],
      // bookingDate: [moment().format('YYYY-MM-DD')],
      appointmentTime: ["00:00:00"],
      // firstName: ["", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')])],
      // lastName: ["", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')])],
      // email: ["", Validators.compose([Validators.required, Validators.email])],
      // phone: ["", Validators.compose([Validators.required,])],
      // status: [1],
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
      email: new FormControl(''),
      phone: new FormControl(''),
      status: new FormControl(''),
    });
    // if (!this.doctorId) {
    //   this.router.navigate(['patient']);
    // }
    // this.loaderService.isLoading.next(true);
    // this.searchDoctorService.getDoctorDetails(this.doctorId).subscribe((res) => {
    //   this.doctorDetails = res.data;
    // if (this.doctorDetails == null) {
    //   this.messageService.showMessage({
    //     icon: 'error',
    //     text: 'Doctor not found',
    //   });
    //   this.router.navigate(['patient/search-doctor']);
    //   return;
    // }
    // this.doctorid = this.doctorDetails.basicInformation.id
    // this.doctorfirstname = this.doctorDetails.basicInformation.firstName
    // this.doctorlastname = this.doctorDetails.basicInformation.lastName
    // this.doctorcity = this.doctorDetails.basicInformation.city
    // this.doctorcountry = this.doctorDetails.basicInformation.country
    // this.doctorpricing = this.doctorDetails.basicInformation.pricing
    // this.doctorTimeZone = this.doctorDetails.drTimeZone
    // this.loaderService.isLoading.next(false);
    // this.showPage = true;
    // this.DravaileblTimezone(this.doctorTimeZone);
    // });

  }
  DravaileblTimezone(timeZone) {
    // this.searchDoctorService.getDoctorAvailibility(this.doctorId, timeZone).subscribe(res => {
    //   if (res["data"] != null) {
    //     console.log('Timezone', res["data"])
    //     this.dayWiseSchedule = res["data"].dayWiseSchedule
    //     console.log(this.dayChange);
    //     console.log('for availible timing check please select any date');
    //     this.dayWiseSchedule = this.dayWiseSchedule.filter(x => x.weekDay == this.dayChange.value)
    //     this.isLoading = false;
    //     console.log(this.dayWiseSchedule)
    //   }
    // })
  }

  checkoutBooking() {
    // if (this.patientDetailsFormGroup.valid) {
    //   if (!this.checkTerms) {
    //     this.messageService.showMessage({
    //       icon: 'error',
    //       text: 'Terms & Conditions not accepted',
    //     });

    //     return;
    //   }
    //   console.log('======================')
    //   this.loaderService.isLoading.next(true);
    //   var data = this.patientDetailsFormGroup.value;
    //   console.log(this.appointmentTimeChange)
    //   data.appointmentTime = this.appointmentTimeChange.split('-')[0]
    //   data.appointmentDate = this.appointmentDateChange
    //   console.log(data)
    //   data.bookingDate = data.appointmentDate;
    //   data.appointmentEndTime = this.appointmentTimeChange.split('-')[1]
    //   this.searchDoctorService.getDoctorAvailibility(this.doctorId, this.doctorTimeZone).subscribe(res => {
    //     if (res.succeeded) {
    //       var availibilityData = res.data.dayWiseSchedule as any[];
    //       var appointmentWeekDay = moment(data.appointmentDate).day();
    //       var dayData = availibilityData.find(x => x.weekDay == appointmentWeekDay);
    //       console.log(dayData)
    //       if (dayData != undefined) {
    //         let available = false;
    //         dayData.timeSlots.forEach(timeSlot => {
    //           if (timeSlot.fromTimeSlot == data.appointmentTime) {
    //             available = true;
    //           }
    //         });

    //         if (available) {
    //           console.log(available)
    //           this.appointmentService.saveAppointment(data).subscribe(x => {
    //             this.messageService.showMessage({
    //               icon: 'success',
    //               text: 'Appointment booked successfully',
    //             });
    //             this.appointmentService.currentAppointment = {
    //               doctorId: this.doctorId,
    //               doctorName: this.doctorDetails.basicInformation.firstName + " " + this.doctorDetails.basicInformation.lastName,
    //               date: this.summaryDate,
    //               startTime: this.summaryTime,
    //               endTime: moment('0001-01-01T' + this.patientDetailsFormGroup.controls.appointmentTime.value).add(1, 'hours').format('hh:mm A')
    //             }
    //             console.log(x.data.appointmentId)
    //             this.addAppontmentId = x.data.appointmentId
    //             this.appointmentService.GenerateToken().
    //               subscribe(res => {
    //                 console.log(res)
    //                 this.patientToken = res
    //                 var dataofSendmail = {
    //                   appointmentId: this.addAppontmentId,
    //                   status: 1,
    //                   patientCallToken: this.patientToken.value.token,
    //                   patientCallId: this.patientToken.value.user.id
    //                 }
    //                 this.appointmentService.UpdateCallData(dataofSendmail)
    //                   .subscribe(res => {
    //                     console.log(res)
    //                   })
    //               })
    //             this.router.navigate(['patient/success']);
    //             this.loaderService.isLoading.next(false);
    //           },
    //             errorRes => {
    //               if (errorRes.error.data != null) {
    //                 this.messageService.showMessage({
    //                   icon: 'error',
    //                   text: errorRes.error.data[Object.keys(errorRes.error.data)[0]].errors[0].errorMessage,
    //                 });
    //               }
    //               else if (errorRes.error.errors != null) {
    //                 this.messageService.showMessage({
    //                   icon: 'error',
    //                   text: errorRes.error.errors.Message[0],
    //                 });
    //               }
    //               this.loaderService.isLoading.next(false);
    //             });
    //         }
    //         else {
    //           this.messageService.showMessage({
    //             icon: 'error',
    //             text: 'Doctor is not available for this timing',
    //           });
    //           this.loaderService.isLoading.next(false);
    //         }
    //       }
    //       else {
    //         this.messageService.showMessage({
    //           icon: 'error',
    //           text: 'Doctor is not available for this timing',
    //         });
    //         this.loaderService.isLoading.next(false);
    //       }
    //     }
    //     else {
    //       this.messageService.showMessage({
    //         icon: 'error',
    //         text: 'Doctor is not available for this timing',
    //       });
    //       this.loaderService.isLoading.next(false);
    //     }
    //   });
    // }
    // else {
    //   var errorMessage = "Validation failed, Please enter valid data";
    //   // add front validations here
    //   if (this.patientDetailsFormGroup.controls.firstName.invalid) {
    //     errorMessage = "First name is required and should not contain numbers or special characters"
    //   }
    //   else if (this.patientDetailsFormGroup.controls.lastName.invalid) {
    //     errorMessage = "Last name is required and should not contain numbers or special characters"
    //   }
    //   else if (this.patientDetailsFormGroup.controls.email.invalid) {
    //     errorMessage = "Please enter valid E-mail address"
    //   }
    //   else if (this.patientDetailsFormGroup.controls.phone.invalid) {
    //     errorMessage = "Please enter valid contact number"
    //   }

    //   this.messageService.showMessage({
    //     icon: 'error',
    //     text: errorMessage,
    //   });
    // }
  }

  changeAppointmentDateTime() {
    // this.summaryDate = moment(this.patientDetailsFormGroup.controls.appointmentDate.value).format('DD MMM YYYY');
    // this.summaryTime = moment('0001-01-01T' + this.patientDetailsFormGroup.controls.appointmentTime.value).format('hh:mm A');
  }
  onDateChange(event) {
    // this.isLoading = true;
    // moment(event).format('DD MMM YYYY');
    // this.appointmentDateChange = moment(event).format('YYYY-MM-DD')
    // this.weekDay = moment(event).format('dddd')

    // this.dayChange = this.Days.find(x => x.day == this.weekDay)
    // this.DravaileblTimezone(this.doctorTimeZone)

  }
  // changeAppointmentTime(event) {
  //   console.log(event)
  //   this.appointmentTimeChange = event
  // }

  // changeTermsStatus() {
  //   this.checkTerms = !this.checkTerms;
  // }


  // onStripeInvalid(error: Error) {
  //   console.log('Validation Error', error)
  // }

  // onStripeError(error: Error) {
  //   console.error('Stripe error', error)
  // }

  // setPaymentMethod(token: stripe.paymentMethod.PaymentMethod) {
  //   console.log('Stripe Payment Method', token)
  // }

  // setStripeToken(token: stripe.Token) {
  //   console.log('Stripe Token', token)
  // }

  // setStripeSource(source: stripe.Source) {
  //   console.log('Stripe Source', source)
  // }
}



