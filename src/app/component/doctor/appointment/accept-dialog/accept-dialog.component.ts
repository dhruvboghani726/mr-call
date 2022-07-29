import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.scss']
})


export class AcceptDialogComponent implements OnInit {
  local_data: any;
  action: any;
  doctorToken: any;
  currentUser: any;

  Time_select: select[] = [
    {value: 'Weekly-0', viewValue: 'Weekly'},
    {value: 'Monthly-1', viewValue: 'Monthly'},
    {value: 'Yearly-2', viewValue: 'Yearly'},
  ];

  constructor(
    public dialogRef: MatDialogRef<AcceptDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AcceptDialogComponent,
  
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
   }

  isVisible: boolean = false;

  ngOnInit(): void {
    if(this.local_data.actiondialog == 'Accept'){
      this.isVisible = true;
    }
   
  }

  actionofDialog(){
    if(this.local_data.actiondialog == 'Accept'){

      alert('Appointment Accepted SuccessFully');
                 
    }
    if(this.local_data.actiondialog == 'Cancel'){
     
     alert('Appointment cancel SuccessFully')
    }
    if(this.local_data.actiondialog == 'Block'){
     
     alert('Appointment block SuccessFully')
    }
  }

  
  
}
