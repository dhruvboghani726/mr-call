import { Component, OnInit } from '@angular/core';
// import { jsPDF } from "jspdf";

export interface PeriodicElement {
  MON: string;
  TUE: string;
  WED: string;
  THU: string;
  FRI: string;
  SAT: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { MON: 's', TUE: 's', WED: 's', THU: 's', FRI: 's', SAT: 's', },

];
@Component({
  selector: 'app-appoinment-recipt',
  templateUrl: './appoinment-recipt.component.html',
  styleUrls: ['./appoinment-recipt.component.scss']
})
export class AppoinmentReciptComponent implements OnInit {
  bookingdate = new Date();

  displayedColumns: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  downloadPdf() {
    // const doc = new jsPDF();
    // doc.text("Hello world!", 10, 10);
    // doc.save();
  }
}
