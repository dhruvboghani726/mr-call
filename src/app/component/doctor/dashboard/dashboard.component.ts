import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  DoctorCountDashboard: any;
  AppointmentCountDashboard: any;
  TodayAppointmentDashboard: any;
  dashboard: any;

  loading$ = this.loader.isLoading;
  constructor(private dashboardservice: DashboardService, public loader: LoaderService) { }

  ngOnInit(): void {
    this.dashboardcount()
  }
  dashboardcount() {
    this.loader.show();
    this.dashboardservice.dashboardcount().pipe().subscribe(res => {
      console.log(res);
      this.DoctorCountDashboard = res.data.doctorCount;
      this.AppointmentCountDashboard = res.data.totalAppointment;
      this.TodayAppointmentDashboard = res.data.todayAppointment;
      console.log(this.dashboard);
      this.loader.hide();
    });
  }
}
