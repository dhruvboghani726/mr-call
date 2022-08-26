import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DoctorScheduledTimeService } from 'src/app/shared/services/doctor-schedule-time';
import { DatePipe, WeekDay } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core';
export interface DialogData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.scss'],
  providers: [DatePipe]
})
export class AddSlotComponent implements OnInit {

  addTimeForm: FormGroup;
  timingData: any[] = [];
  showForm: boolean = false;
  selectedWeekDay: string = '';
  timeSlotsFormArray: FormArray = null;
  timeSlotForm: FormGroup = null;

  currentWeekDay: any = 1;
  timeSlotCounts = [[], [], [], [], [], [], []];
  Sun: boolean = false;
  Mon: boolean = false;
  Tus: boolean = false;
  Wed: boolean = false;
  Thu: boolean = false;
  Fri: boolean = false;
  Sat: boolean = false;

  paletteColour;
  selected
  bodydata: any;
  local_data
  doctorId: any;
  docSchedules: any = [];
  SelectedDay: string;
  timeSlotForm1: any;


  constructor(private fb: FormBuilder, private doctorscheduledtimeService: DoctorScheduledTimeService, public datepipe: DatePipe, public dialogRef: MatDialogRef<AddSlotComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.bodydata = data

    this.local_data = { data };
    console.log(this.local_data)
    // this.action = this.local_data.action;
    this.selectedWeekDay = this.local_data.data;
    console.log(this.selectedWeekDay);

    // this.count = this.local_data.count
    // console.log(this.count)
  }

  ngOnInit(): void {
    // this.timingData.forEach(timing => {
    //   this.timeSlotCounts[parseInt(timing.weekDay) - 1] = timing.timeSlots;
    //   timing.timeSlots.forEach(timeSlot => {
    //     // timeSlot.startTime = this.convertTimeStringFormat(timeSlot.startTime);
    //     // timeSlot.endTime = this.convertTimeStringFormat(timeSlot.endTime);
    //   });
    // });
    var selectedWeekDay = this.selectedWeekDay
    console.log(selectedWeekDay);


    this.changeSelectedWeekDay(selectedWeekDay);
    this.showForm = true;
    this.doctorId = JSON.parse(localStorage.getItem('currentDoctor')).data.id
    // this.timeSlotForm = this.fb.group({
    //   startTime: ['', Validators.required,],
    //   endTime: ['', Validators.required]

    // });
    // console.log(this.timeSlotForm.value);

  }
  // doAction() {
  //   console.log(this.timeSlotForm.value);
  //   this.dialogRef.close({ event: this.action, data: [this.timeSlotForm.value], day: this.day });
  // }

  //Close dialog
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  // deleteTimeSlot(index) {
  //   // (this.timeSlotForm.controls.timeSlots as FormArray).removeAt(index);
  // }
  getTimeSlotFormArray() {

    return this.timeSlotForm.controls.timeSlots as FormArray;
  }
  addTimeSlotEntry() {
    (this.timeSlotForm.controls.timeSlots as FormArray).push(this.fb.group({
      startTime: ['00:00:00'],
      endTime: ['01:00:00']
    }));
  }


  get f() {
    return this.timeSlotForm.controls;
  }
  pickerBopen() {

  }
  addTimeSlots() {

    this.docSchedules = this.timeSlotForm1.value
    console.log(this.docSchedules);

    // let timechange = this.datepipe.transform(this.docSchedules.toLocaleString()); // convert format HH mm ss 
    // console.log(timechange);

    // console.log(this.docSchedules);
    // var date = new Date()
    // var timeString = date.toLocaleString();
    // console.log(timeString);

    // var timechange = this.docSchedules
    // var time = timechange.toLocaleString([]);
    // console.log(time);

    // this.docSchedules.toLocaleString('en-GB', { timeZone: 'UTC' })
    // console.log(this.docSchedules);

    var doctorId = this.doctorId;
    this.doctorscheduledtimeService.doctorscheduletimeadd(this.doctorId, this.docSchedules)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        this.dialogRef.close({ event: this.local_data.data });

      })



    // // use of String split() Method
    // var newarr = this.docSchedules.split(" ");
    // console.log(newarr);

    // this.f.startTime.value, this.f.endTime.value
    // if (this.timeSlotForm.valid) {
    //   var data = this.timeSlotForm.value;
    //   var invalidTimeSlots = [];
    //   data.timeSlots.forEach(element => {
    //     if (element.startTime == '' && element.endTime == '') {
    //       invalidTimeSlots.push(element);
    //     }
    //   });

    //   data.timeSlots = (data.timeSlots as Array<any>).filter(selectedWeekDay => invalidTimeSlots.indexOf(selectedWeekDay) == -1);
    //   var timingObjIndex = this.timingData.findIndex(selectedWeekDay => selectedWeekDay.workday == this.selectedWeekDay);
    //   if (timingObjIndex != -1) {
    //     this.timingData[timingObjIndex].timeSlots = data.timeSlots;
    //   }
    //   else {
    //     this.timingData.push({
    //       workday: this.selectedWeekDay,
    //       timeSlots: data.timeSlots
    //     });
    //   }
    //   this.timeSlotCounts[this.selectedWeekDay] = data.timeSlots;
    //   this.timeSlotsFormArray = this.fb.array([]);
    //   this.timeSlotsFormArray.push(this.fb.group({
    //     startTime: ['00:00:00'],
    //     endTime: ['01:00:00'],
    //     workday: ['']
    //   }));
    //   this.timeSlotForm = this.fb.group({
    //     workday: [1],
    //     timeSlots: this.timeSlotsFormArray
    //   });
    //   this.changeSelectedWeekDay(this.selectedWeekDay);
    //   this.dialogRef.close({ data: [this.timeSlotForm.value], day: this.selectedWeekDay });
    //   // $('#edit_time_slot').modal('hide');
    //   // $('#add_time_slot').modal('hide');
    // }
    // else {
    //   console.log("error")
    //   return;
    // }
  }
  changeSelectedWeekDay(workday) {

    let dayName;

    switch (workday) {
      case 7:
        dayName = 'Sunday';
        this.Sun = true;
        this.Mon = false;
        this.Tus = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        break;
      case 1:
        dayName = 'Monday';
        this.Sun = false;
        this.Mon = true;
        this.Tus = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        break;
      case 2:
        dayName = 'Tuesday';
        this.Sun = false;
        this.Mon = false;
        this.Tus = true;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        break;
      case 3:
        dayName = 'Wednesday';
        this.Sun = false;
        this.Mon = false;
        this.Tus = false;
        this.Wed = true;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        break;
      case 4:
        dayName = 'Thursday';
        this.Sun = false;
        this.Mon = false;
        this.Tus = false;
        this.Wed = false;
        this.Thu = true;
        this.Fri = false;
        this.Sat = false;
        break;
      case 5:
        dayName = 'Friday';
        this.Sun = false;
        this.Mon = false;
        this.Tus = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = true;
        this.Sat = false;
        break;
      case 6:
        dayName = 'Saturday';
        this.Sun = false;
        this.Mon = false;
        this.Tus = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = true;
        break;
      default:
        dayName = 'Invalid day';
        this.Sun = false;
        this.Mon = false;
        this.Tus = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
    }

    console.log(dayName);
    // this.paletteColour = 'warn';
    // this.selected = workday;
    // this.selectedWeekDay = this.selected;
    // console.log(this.selectedWeekDay);

    this.paletteColour = 'warn';
    this.selected = workday;
    this.SelectedDay = dayName
    // console.log(this.SelectedDay);

    this.selectedWeekDay = this.SelectedDay;
    console.log(this.selectedWeekDay);

    console.log(this.local_data.data)

    if (this.timeSlotCounts[this.selectedWeekDay]) {
      this.timeSlotsFormArray = this.fb.array([]);
      this.timeSlotCounts[this.selectedWeekDay].forEach(selectedWeekDay => {
        this.timeSlotsFormArray.push(this.fb.group({
          startTime: [selectedWeekDay.startTime],
          endTime: [selectedWeekDay.endTime],
          workday: [this.local_data.data]
        }));
      });
      console.log(this.selectedWeekDay);

      this.timeSlotForm = this.fb.group({
        // workday: [this.local_data.data],
        timeSlots: this.timeSlotsFormArray
      });

      this.timeSlotForm1 =  this.timeSlotsFormArray
    }
    else {
      this.timeSlotsFormArray = this.fb.array([]);
      this.timeSlotsFormArray.push(this.fb.group({
        startTime: [''],
        endTime: [''],
        workday: [this.local_data.data]
      }));
      this.timeSlotForm = this.fb.group({
        // workday: [this.local_data.data],
        timeSlots: this.timeSlotsFormArray
      });

      this.timeSlotForm1 =  this.timeSlotsFormArray
    }
  }
}


