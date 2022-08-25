import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, first } from 'rxjs/operators';
import { BookAppoinmentService } from 'src/app/shared/services/BookAppointment.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

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
  form: any;
  Time_select: select[] = [
    { value: 'Weekly', viewValue: 'Weekly' },
    { value: 'Monthly', viewValue: 'Monthly' },
    { value: 'Yearly', viewValue: 'Yearly' },
  ];
  appointmentData: any;
  formdata: any;

  constructor(
    public dialogRef: MatDialogRef<AcceptDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AcceptDialogComponent,
    private _snackBar: MatSnackBar,
    private bookappoinmentService: BookAppoinmentService,
    private snackService: SnackbarService,
    public loader: LoaderService,
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.appointmentData = this.local_data;
    console.log(this.appointmentData);
  }

  isVisible: boolean = false;

  ngOnInit(): void {
    this.InitForm();
    if (this.local_data.actiondialog == 'Accept') {
      this.isVisible = true;
    }
    console.log(this.local_data.appointmentData.appointmentId);
  }
  InitForm() {
    this.form = new FormGroup({
      Type: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.form.controls;
  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }

  actionofDialog() {
    this.formdata = this.form.value
    console.log(this.formdata);
    // accept appoinment api
    if (this.local_data.actiondialog == 'Accept') {
      this.loader.show();
      this.appointmentData = this.local_data;
      console.log(this.appointmentData);

      this.bookappoinmentService
        .updateAppointment(
          this.local_data.appointmentData.appointmentId,
          this.local_data.appointmentData.startTime,
          this.local_data.appointmentData.endTime,
          this.local_data.appointmentData.appointmentDate,
          this.f.Type.value,
          "Accepted",
          null
        )
        .pipe()
        .subscribe(
          (data: any) => {
            console.log(data)
            this.loader.hide();
            if (data.message == 'Appointment updated successfully') {

            } else {
              console.log(data.error.message)

            }
            this.snackService.openSnackBar("Appointment updated successfully", '');
            this.dialogRef.close({ data: this.local_data });

            this.snackService.openSnackBarError('Appointment status is Cancelled can not update.', '')
            this.dialogRef.close({ data: this.local_data });
          },
          error => {
            console.log(error.message)
            console.log(error.error)
            this.snackService.openSnackBarError('Appointment status is Cancelled can not update.', '')
          }
        )
    }

    //cancel appoinment api 
    if (this.local_data.actiondialog == 'Cancel') {
      this.loader.show();
      this.appointmentData = this.local_data;
      this.bookappoinmentService
        .updateAppointment(
          this.local_data.appointmentData.appointmentId,
          this.local_data.appointmentData.startTime,
          this.local_data.appointmentData.endTime,
          this.local_data.appointmentData.appointmentDate,
          this.f.Type.value,
          "Cancelled",
          null
        )
        .pipe()
        .subscribe(
          (data: any) => {
            console.log(data)
            this.loader.hide();
            if (data.message == 'Appointment updated successfully') {
            }
            else {
              this.snackService.openSnackBarError('Appointment status is Cancelled can not update.', '')
              this.dialogRef.close({ data: this.local_data });
              console.log(data.error.message)

            }
            this.snackService.openSnackBar("Appointment updated successfully", '');
            this.dialogRef.close({ data: this.local_data });


          },

          error => {
            console.log(error.message)
            console.log(error.error)
            this.snackService.openSnackBarError('Appointment status is Cancelled can not update.', '')
          }
        )
    }

    if (this.local_data.actiondialog == 'Block') {

      alert('Appointment block SuccessFully')
    }
  }

}



