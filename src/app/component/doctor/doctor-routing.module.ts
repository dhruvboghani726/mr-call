import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '../../layout/layout.moduls';

import { BlankLayoutComponent } from '../../layout/blank-layout/blank-layout.component';

import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';
import { ScheduleTimingComponent } from './schedule-timing/schedule-timing.component';
import { BlockCompanyComponent } from './block-company/block-company.component';
import { AuthGuard } from '../../shared/_helpers/auth.guard';



@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild([
      {
        path: '',
        component: BlankLayoutComponent,
        children: [
          // { path: '404', component: ErrorComponent, pathMatch: 'full' },
          // { path: 'doctor-login', component: DoctorLoginComponent, pathMatch: 'full' },
          // { path: 'doctor-signup', component: DoctorSignupComponent, pathMatch: 'full' },
          { path: 'doctor-login', component: LoginComponent, pathMatch: 'full' },
          { path: 'doctor-forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
          { path: 'doctor-register', component: RegisterComponent, pathMatch: 'full' } 
        ],
      },
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          {
            path: 'doctor-dashboard', children: [
              { path: '', component: DashboardComponent, pathMatch: 'full', canActivate:[AuthGuard]},
            
            ]
          } ,
          { path: 'appointment', component: AppointmentComponent, pathMatch: 'full', canActivate:[AuthGuard] },
          { path: 'schedule-timing', component: ScheduleTimingComponent, pathMatch: 'full', canActivate:[AuthGuard] },
          { path: 'block-company', component: BlockCompanyComponent, pathMatch: 'full', canActivate:[AuthGuard]}         
        ],
      }
    ]),

    LayoutsModule,
  ],
  exports: [ RouterModule ],

})
export class DoctorRoutingModule { }
