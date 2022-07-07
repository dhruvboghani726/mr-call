import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { DoctorRoutingModule } from './doctor-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgOtpInputModule } from 'ng-otp-input';
import { CountdownModule } from 'ngx-countdown';
import { AppointmentComponent } from './appointment/appointment.component';
import { AcceptDialogComponent } from './appointment/accept-dialog/accept-dialog.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
   
    DashboardComponent,
    RegisterComponent,
   
    LoginComponent,
    ForgotPasswordComponent,
    AppointmentComponent,
    AcceptDialogComponent
     ],
  imports: [
   
 
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    FlexLayoutModule,
    MatStepperModule,
    NgOtpInputModule,
    CountdownModule,
  ],
  providers: [ AsyncPipe, DatePipe ],
 

})
export class DoctorModule { }
