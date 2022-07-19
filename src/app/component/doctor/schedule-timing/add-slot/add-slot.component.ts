import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';





export interface DialogData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.scss']
})
export class AddSlotComponent implements OnInit {
  addTimeForm: FormGroup;
  
  timingData: any[] = [];
  showForm: boolean = false;
  selectedWeekDay: number = 1;
  timeSlotsFormArray: FormArray = null;
  timeSlotForm: FormGroup = null;
 
  currentWeekDay: any = 1;
  timeSlotCounts = [[], [], [], [], [], [], []];
  Sun:boolean=false;
  Mon:boolean=false;
  Tus:boolean=false;
  Wed:boolean=false;
  Thu:boolean=false;
  Fri:boolean=false;
  Sat:boolean=false;
 count;
 paletteColour;
 selected
 bodydata: any;
 local_data
 action
 day
  constructor(  private fb: FormBuilder,public dialogRef: MatDialogRef<AddSlotComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.bodydata = data

    this.local_data = { ...data };
    console.log(this.local_data )
    this.action = this.local_data.action;
    this.day = this.local_data.day;
 
    this.count=this.local_data.count
    console.log(this.count)
  


   }

  ngOnInit(): void {
    var x=parseInt(this.count)
    this.changeSelectedWeekDay(x);
    this.showForm = true;
  }
  //Close dialog
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  deleteTimeSlot(index) {
    (this.timeSlotForm.controls.timeSlots as FormArray).removeAt(index);
  }
  getTimeSlotFormArray() {
  
    return this.timeSlotForm.controls.timeSlots as FormArray;
  }
  addTimeSlotEntry() {
    (this.timeSlotForm.controls.timeSlots as FormArray).push(this.fb.group({
      fromTimeSlot: ['00:00:00'],
      toTimeSlot: ['01:00:00']
    }));
  }


  
  addTimeSlots() {

  
   
    if (this.timeSlotForm.valid) {
      var data = this.timeSlotForm.value;
      var invalidTimeSlots = [];
      data.timeSlots.forEach(element => {
        if (element.fromTimeSlot == '' && element.toTimeSlot == '') {
          invalidTimeSlots.push(element);
        }
      });
      data.timeSlots = (data.timeSlots as Array<any>).filter(x => invalidTimeSlots.indexOf(x) == -1);
      var timingObjIndex = this.timingData.findIndex(x => x.weekDay == this.selectedWeekDay);
      if (timingObjIndex != -1) {
        this.timingData[timingObjIndex].timeSlots = data.timeSlots;
      }
      else {
        this.timingData.push({
          weekDay: this.selectedWeekDay,
          timeSlots: data.timeSlots
        });
      }
      this.timeSlotCounts[this.selectedWeekDay - 1] = data.timeSlots;
      this.timeSlotsFormArray = this.fb.array([]);
      this.timeSlotsFormArray.push(this.fb.group({
        fromTimeSlot: ['00:00:00'],
        toTimeSlot: ['01:00:00']
      }));
      this.timeSlotForm = this.fb.group({
        weekDay: [1],
        timeSlots: this.timeSlotsFormArray
      });
      this.changeSelectedWeekDay(this.selectedWeekDay);


      this.dialogRef.close({ event: this.action, data: [this.timeSlotForm.value], day: this.day });
      // $('#edit_time_slot').modal('hide');
      // $('#add_time_slot').modal('hide');
    }
    else {
     console.log("error")
      return;
    }
  }
  changeSelectedWeekDay(weekDay) {

   
    let dayName;
    
    switch (weekDay) {
      case 7:
        dayName = 'Sunday';
        this.Sun=true;
        this.Mon=false;
        this.Tus=false;
        this.Wed=false;
        this.Thu=false;
        this.Fri=false;
        this.Sat=false;
        break;
      case 1:
        dayName = 'Monday';
        this.Sun=false;
        this.Mon=true;
        this.Tus=false;
        this.Wed=false;
        this.Thu=false;
        this.Fri=false;
        this.Sat=false;
        break;
      case 2:
        dayName = 'Tuesday';
        this.Sun=false;
        this.Mon=false;
        this.Tus=true;
        this.Wed=false;
        this.Thu=false;
        this.Fri=false;
        this.Sat=false;
        break;
      case 3:
        dayName = 'Wednesday';
        this.Sun=false;
        this.Mon=false;
        this.Tus=false;
        this.Wed=true;
        this.Thu=false;
        this.Fri=false;
        this.Sat=false;
        break;
      case 4:
        dayName = 'Thursday';
        this.Sun=false;
        this.Mon=false;
        this.Tus=false;
        this.Wed=false;
        this.Thu=true;
        this.Fri=false;
        this.Sat=false;
        break;
      case 5:
        dayName = 'Friday';
        this.Sun=false;
        this.Mon=false;
        this.Tus=false;
        this.Wed=false;
        this.Thu=false;
        this.Fri=true;
        this.Sat=false;
        break;
      case 6:
        dayName = 'Saturday';
        this.Sun=false;
        this.Mon=false;
        this.Tus=false;
        this.Wed=false;
        this.Thu=false;
        this.Fri=false;
        this.Sat=true;
        break;
      default:
        dayName = 'Invalid day';
        this.Sun=false;
        this.Mon=false;
        this.Tus=false;
        this.Wed=false;
        this.Thu=false;
        this.Fri=false;
        this.Sat=false;
    }
    
    console.log(dayName);
        this.paletteColour = 'warn';
        this.selected=weekDay;
    
        this.selectedWeekDay = weekDay;
        if (this.timeSlotCounts[this.selectedWeekDay - 1].length > 0) {
          this.timeSlotsFormArray = this.fb.array([]);
          this.timeSlotCounts[this.selectedWeekDay - 1].forEach(x => {
            this.timeSlotsFormArray.push(this.fb.group({
              fromTimeSlot: [x.fromTimeSlot],
              toTimeSlot: [x.toTimeSlot]
            }));
          });
    
          this.timeSlotForm = this.fb.group({
            weekDay: [this.selectedWeekDay],
            timeSlots: this.timeSlotsFormArray
          });
    
        }
        else {
          this.timeSlotsFormArray = this.fb.array([]);
          this.timeSlotsFormArray.push(this.fb.group({
            fromTimeSlot: ['00:00:00'],
            toTimeSlot: ['01:00:00']
          }));
          this.timeSlotForm = this.fb.group({
            weekDay: [this.selectedWeekDay],
            timeSlots: this.timeSlotsFormArray
          });
        }
      }
    






}
