import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-unblock-dialog',
  templateUrl: './unblock-dialog.component.html',
  styleUrls: ['./unblock-dialog.component.scss']
})
export class UnblockDialogComponent implements OnInit {

  local_data: any;
  action: any;
  doctorToken: any;
  currentUser: any;

  constructor(
    public dialogRef: MatDialogRef<UnblockDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UnblockDialogComponent,
  
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
   }

  ngOnInit(): void {
   
  }

  actionofDialog(){
    if(this.local_data.actiondialog == 'Unblock'){
     
      alert('Appointment Unblock SuccessFully')
           
    }
    // if(this.local_data.actiondialog == 'Cancel'){
     
    //  alert('Appointment cancel SuccessFully')
    // }
    // if(this.local_data.actiondialog == 'Block'){
     
    //  alert('Appointment block SuccessFully')
    // }
  }


}
