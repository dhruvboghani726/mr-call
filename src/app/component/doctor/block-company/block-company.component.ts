import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnblockDialogComponent } from './unblock-dialog/unblock-dialog.component';

@Component({
  selector: 'app-block-company',
  templateUrl: './block-company.component.html',
  styleUrls: ['./block-company.component.scss']
})
export class BlockCompanyComponent implements OnInit {

  constructor(public http: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  accept(data,action){
    data.actiondialog = action
    const dialogRef = this.dialog.open(UnblockDialogComponent, {
      height: 'auto',
      width: '30%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.loader.hide();
     
    });
  }

}
