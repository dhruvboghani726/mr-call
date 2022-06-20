import { Component, Input, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;

}

/*
 *Offline dialog component 
 */
@Component({
  selector: 'app-offlinedialog',
  templateUrl: './offlinedialog.component.html',
  styleUrls: [ './offlinedialog.component.scss' ]
})

/*
 *Class : Offline dialog
 *Reference link: 
 */
export class OfflinedialogComponent implements OnInit {
  @Input()
  loading: boolean;
  massage;
  doctorinfo = JSON.parse(localStorage.getItem('currentDoctor'));
  constructor(private dialogRef: MatDialogRef<OfflinedialogComponent>,
  
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.massage = data
  }

  ngOnInit(): void {
  }

  //Close dialog
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  doAction() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  closeDialog1() {
    this.dialogRef.close();
  }

  //Assigned new doctor api
  assignNewdoctor() {
 
  }

  //offline day 
  offlineDay() {
 
  }

  //Status check
  Status() {
   
  }
}
