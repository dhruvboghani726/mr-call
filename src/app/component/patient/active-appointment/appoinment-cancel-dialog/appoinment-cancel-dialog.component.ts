import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { BookAppoinmentService } from 'src/app/shared/services/BookAppointment.service';

@Component({
  selector: 'app-appoinment-cancel-dialog',
  templateUrl: './appoinment-cancel-dialog.component.html',
  styleUrls: ['./appoinment-cancel-dialog.component.scss'],
})
export class AppoinmentCancelDialogComponent implements OnInit {
  local_data: {
    data: AppoinmentCancelDialogComponent;
    dialogRef: MatDialogRef<AppoinmentCancelDialogComponent>;
  };
  appointmentData: any;

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: AppoinmentCancelDialogComponent,
    public dialogRef: MatDialogRef<AppoinmentCancelDialogComponent>,
    private _snackBar: MatSnackBar,
    private bookappoinmentService: BookAppoinmentService
  ) {
    this.local_data = { ...data };
  }

  ngOnInit(): void {
    console.log(this.local_data);
  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }

  cancelAppointment() {
    this.appointmentData = this.local_data;
    this.bookappoinmentService
      .updateAppointment(
        this.appointmentData.appointmentId,
        this.appointmentData.startTime,
        this.appointmentData.endTime,
        this.appointmentData.appointmentDate,
        this.appointmentData.day,
        "Cancelled",
        null
      )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data)
          this.openSnackBar("Update Successfully", '');
          this.dialogRef.close({ data: this.local_data });
        },
        (error) => {}
      );
  }
}
