import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.service';
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
  isLoading: boolean;

  constructor(private dashboardservice: DashboardService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.dashboardcount()
  }
  dashboardcount() {
    this.isLoading = true;
    this.dashboardservice.dashboardcount().pipe().subscribe(res => {
      console.log(res);
      this.DoctorCountDashboard = res.data.doctorCount;
      this.AppointmentCountDashboard = res.data.totalAppointment;
      this.TodayAppointmentDashboard = res.data.todayAppointment;
      console.log(this.dashboard);
      this.isLoading = false;
    });
  }
}
