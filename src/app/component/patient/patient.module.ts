import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientRoutingModule } from './patient-routing.module';
import { BookAnAppointmentComponent } from './book-an-appointment/book-an-appointment.component';
import { BrandReminderCardComponent } from './brand-reminder-card/brand-reminder-card.component';
import { UploadCardComponent } from './brand-reminder-card/upload-card/upload-card.component';
import { ShareCardComponent } from './brand-reminder-card/share-card/share-card.component';
import { CardHistoryComponent } from './brand-reminder-card/card-history/card-history.component';
import { ActiveAppointmentComponent } from './active-appointment/active-appointment.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { UpdateProfileComponent } from './profile-settings/update-profile/update-profile.component';
import { ChangePasswordComponent } from './profile-settings/change-password/change-password.component';
import { MydoctorListComponent } from './mydoctor-list/mydoctor-list.component';
import { MRepsVacancyComponent } from './m-reps-vacancy/m-reps-vacancy.component';
import { RegisterComponent } from './register/register.component';
// import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { environment } from 'environments/environment';
import { MatStepperModule } from '@angular/material/stepper';
import { NgOtpInputModule } from 'ng-otp-input';
import { CountdownModule } from 'ngx-countdown';
import { GoogleLoginProvider, SocialLoginModule, SocialAuthServiceConfig, } from 'angularx-social-login';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from '~app/app.component';
import { AppoinmentCancelDialogComponent } from './active-appointment/appoinment-cancel-dialog/appoinment-cancel-dialog.component';
import { AppoinmentReciptComponent } from './appoinment-recipt/appoinment-recipt.component';

// import { StripeModule } from "stripe-angular"

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [

    DashboardComponent,
    ActiveAppointmentComponent,
    BookAnAppointmentComponent,
    MydoctorListComponent,
    MRepsVacancyComponent,
    BrandReminderCardComponent,
    UploadCardComponent,
    ShareCardComponent,
    CardHistoryComponent,
    ProfileSettingsComponent,
    UpdateProfileComponent,
    ChangePasswordComponent,
    RegisterComponent,
    // AppointmentComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AppoinmentCancelDialogComponent,
    AppoinmentReciptComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PatientRoutingModule,
    FlexLayoutModule,
    MatStepperModule,
    NgOtpInputModule,
    CountdownModule,
    SocialLoginModule,
    MatTabsModule,

    // StripeModule.forRoot(environment.stripAPIKey)
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "937894872683-q4rbr8nvuh3ii0o7mrak4bd1ga5kr39o.apps.googleusercontent.com"

            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})


export class PatientModule { }
