import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jspdf, { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { BookAppoinmentService } from 'src/app/shared/services/BookAppointment.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { first } from 'rxjs/operators';
import { Drviewappoinment } from 'src/app/shared/_models/DrViewappoinment';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  doctorId: any;
  mrId: any;
  Viewallappointment: any = [];
  order: any;
  constructor(private bookappoinmentService: BookAppoinmentService, public loader: LoaderService, private activatedRoute: ActivatedRoute) { }
  appoimentDate: any;
  startTime: any;
  endTime: any;

  ngOnInit(): void {
    // this.doctorId = JSON.parse(localStorage.getItem('currentDoctor')).data.id
    // console.log(this.doctorId);

    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      console.log(params['appoimentDate']);
      console.log(params['startTime'])
      this.appoimentDate = params['appoimentDate']
      this.startTime = params['startTime']
      this.endTime = params['endTime']

    });
    this.mrId = JSON.parse(localStorage.getItem('currentMr')).data.id
    console.log(this.mrId);
    this.ViewAppointment();

  }
  ViewAppointment() {

    this.bookappoinmentService.DrAllAppointment<Drviewappoinment>(`api/MR/ViewAllAppointment?mrId=${this.mrId}`)
      .subscribe((data) => {
        console.log(data);
        this.Viewallappointment = data
        console.log(this.Viewallappointment);
      })
  }



  async downloadPdf() {
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
