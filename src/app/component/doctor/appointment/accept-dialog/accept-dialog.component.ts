import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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

  constructor(
    public dialogRef: MatDialogRef<AcceptDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AcceptDialogComponent,
  
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
   }

  ngOnInit(): void {
   
  }

  actionofDialog(){
    if(this.local_data.actiondialog == 'Accept'){
     
      alert('Appointment Accepted SuccessFully')
           
    }
    if(this.local_data.actiondialog == 'Cancel'){
     
     alert('Appointment cancel SuccessFully')
    }
  }

  
  
}
