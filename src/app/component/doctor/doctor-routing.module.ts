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
            path: 'dashboard', children: [
              { path: '', component: DashboardComponent, pathMatch: 'full'},
            
            ]
          } ,
          { path: 'appointment', component: AppointmentComponent, pathMatch: 'full' },        
        ],
      }
    ]),

    LayoutsModule,
  ],
  exports: [ RouterModule ],

})
export class DoctorRoutingModule { }
