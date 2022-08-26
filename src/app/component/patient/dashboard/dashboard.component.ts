import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mrCountDashboard: any;
  AppointmentCountDashboard: any;
  TodayAppointmentDashboard: any;

  loading$ = this.loader.isLoading;
  mrId: any;
  id: any;


  constructor(private dashboardservice: DashboardService, public loader: LoaderService) { }

  ngOnInit(): void {
    this.mrId = JSON.parse(localStorage.getItem('currentMr')).data.id

    this.dashboardcount();
  }
  // dashboardcount() {
  //   // this.loader.show();
  //   this.id = this.mrId;
  //   console.log(this.id);
  //   this.dashboardservice.dashboardcount(this.id).pipe().subscribe(res => {
  //     console.log(res);
  //     this.mrCountDashboard = res.data.mrCount;
  //     this.AppointmentCountDashboard = res.data.totalAppointment;
  //     this.TodayAppointmentDashboard = res.data.todayAppointment;

  //       this.loader.hide();
  //   });


  dashboardcount() {
    this.loader.show();
    this.id = this.mrId;
    this.dashboardservice.dashboardData(this.id)
      .pipe()
      .subscribe(res => {
        console.log(res);
        this.mrCountDashboard = res.data.mrCount;
        this.AppointmentCountDashboard = res.data.totalAppointment;
        this.TodayAppointmentDashboard = res.data.todayAppointment;

        this.loader.hide();
      });
  }
}
