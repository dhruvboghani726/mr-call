import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CONSTANT } from '../../../shared/utils/constant';
import { AddSlotComponent } from './add-slot/add-slot.component';
import { MatDialog } from '@angular/material/dialog';
import { count } from 'rxjs/internal/operators/count';
import { DoctorScheduledTimeService } from 'src/app/shared/services/doctor-schedule-time';

@Component({
  selector: 'app-schedule-timing',
  templateUrl: './schedule-timing.component.html',
  styleUrls: ['./schedule-timing.component.scss']
})
export class ScheduleTimingComponent implements OnInit {
  slotDuration = CONSTANT.SlotDuration
  options
  public filteredList = this.slotDuration.slice();
  Duration
  Sun: boolean = false;
  Mon: boolean = false;
  Tus: boolean = false;
  Wed: boolean = false;
  Thu: boolean = false;
  Fri: boolean = false;
  Sat: boolean = false;
  showSelected: boolean = false;
  showSelectededit: boolean = false;
  selectedWeekDay: string = '';
  selected
  paletteColour
  SelectedDay: string = '';
  doctorId: any;
  totalScheduleTime: any;
  totalScheduleTimebyDay = [];

  constructor(public dialog: MatDialog, private doctorscheduletimeservice: DoctorScheduledTimeService) { }

  ngOnInit(): void {
    this.doctorId = JSON.parse(localStorage.getItem('currentDoctor')).data.id
    this.getSchedule()
  }
  changeValue(value: any) {

    this.Duration = value
  }
  changeSelectedWeekDay(workday) {
    this.showSelected = false
    this.showSelectededit = false

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

    this.paletteColour = 'warn';
    this.selected = workday;
    this.SelectedDay = dayName
    // console.log(this.SelectedDay);

    this.selectedWeekDay = this.SelectedDay;
    console.log(this.selectedWeekDay);
    this.timeSlotByday(this.selectedWeekDay)
  }

  openDialog() {
    // console.log(action, selectedWeekDay, count)
    console.log(this.selectedWeekDay);

    var arr1 = [this.selectedWeekDay];
    const arr2 = arr1.reduce((obj, arrValue) => (obj['day'] = this.selectedWeekDay), {});
    console.log(arr2);

    const dialogRef = this.dialog.open(AddSlotComponent, {
      width: '470px',
      data: arr2
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result",result)
      // if (result) {
      //   console.log(result.data)
      //   this.options = result.data[0].trim
      //   //  this.scheduleDatasunday(result.data);
      // }
      this.timeSlotByday(result.event)

    });

  }

  removeOption(option) {
    const index = this.options.indexOf(option);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }
  // mat chips


  AddSlotSection: boolean = false;
  Show() {
    this.AddSlotSection = true;
  }


  getSchedule(){
    this.doctorscheduletimeservice.doctorscheduletime(this.doctorId).pipe().subscribe(res => {
      console.log(res);
      this.totalScheduleTime = res
 
    },
      error => {
        console.log('cannot work this api');

      })
  }
  timeSlotByday(day){
      this.totalScheduleTimebyDay = this.totalScheduleTime.filter(x=>x.workDay.toLowerCase() == day.toLowerCase() )
      console.log(this.totalScheduleTimebyDay)
      
  }
}
