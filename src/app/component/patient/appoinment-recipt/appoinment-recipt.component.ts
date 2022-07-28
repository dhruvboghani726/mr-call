import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jspdf, { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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
  @ViewChild('content', { static: false }) el!: ElementRef;

  bookingdate = new Date();
  displayedColumns: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  async downloadPdf() {
    // html2canvas(document.getElementById('content')!).then(canvas => {
    //   // Few necessary setting options

    //   const contentDataURL = canvas.toDataURL('image/png')
    //   let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    //   var width = pdf.internal.pageSize.getWidth();
    //   var height = canvas.height * width / canvas.width;
    //   pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
    //   pdf.save('Mrcall.pdf'); // Generated PDF
    // });

    var data = document.getElementById('content');

    html2canvas(data).then(canvas => {
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
      let PDF_Width = HTML_Width + (top_left_margin * 2);
      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;
      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      // canvas.getContext('2d');
      let imgData = canvas.toDataURL("image/jpg");
      // let pdf = new jsPDF('p', 'mm', [PDF_Width, PDF_Height]);
      let pdf = new jsPDF({
        orientation: 'l', // landscape
        unit: 'pt', // points, pixels won't work properly
        format: [canvas.width, canvas.height] // set needed dimensions for any element
      });
      pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height], 'p');
        pdf.addImage(imgData, 'JPEG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      pdf.setFontSize(20);
      pdf.setFont("times");
      // pdf.setFontType("bold");
      pdf.setTextColor(255, 0, 0);
      pdf.save("Mrcall.pdf");
    });

  }
}
