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
import { SocialLoginModule } from 'angularx-social-login';
import {  SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  
} from 'angularx-social-login';
import { ScheduleTimingComponent } from './schedule-timing/schedule-timing.component';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatSelectModule} from '@angular/material/select';
import { AddSlotComponent } from './schedule-timing/add-slot/add-slot.component';
;
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
   
    DashboardComponent,
    RegisterComponent,
   
    LoginComponent,
    ForgotPasswordComponent,
    AppointmentComponent,
    AcceptDialogComponent,
    ScheduleTimingComponent,
    AddSlotComponent
     ],
  imports: [
   
    SocialLoginModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    FlexLayoutModule,
    MatStepperModule,
    NgOtpInputModule,
    CountdownModule,
    MatSelectFilterModule,
    MatSelectModule
  ],

  providers: [ AsyncPipe, DatePipe,
  
      // FakeBackendInterceptor,
   
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '937894872683-q4rbr8nvuh3ii0o7mrak4bd1ga5kr39o.apps.googleusercontent.com'
              )
            }
          ]
        } as SocialAuthServiceConfig,
      }
  
  
  ],
 

})
export class DoctorModule { }
