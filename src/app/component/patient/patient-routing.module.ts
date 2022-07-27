import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '../../layout/layout.moduls';

import { BlankLayoutComponent } from '../../layout/blank-layout/blank-layout.component';

import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component'

import { DashboardComponent } from './dashboard/dashboard.component';
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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppoinmentReciptComponent } from './appoinment-recipt/appoinment-recipt.component';
import { AuthGuard } from 'src/app/shared/services/patient/auth.guard';




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
        ],
      },
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          {
            path: 'dashboard',children: [
              { path: '', component: DashboardComponent, pathMatch: 'full' , canActivate:[AuthGuard]},

            ],
          },
          { path: 'active-appoinment', component: ActiveAppointmentComponent, pathMatch: 'full', canActivate:[AuthGuard] },
          { path: 'book-an-appointment', component: BookAnAppointmentComponent, pathMatch: 'full', canActivate:[AuthGuard]},
          { path: 'mydoctor-list', component: MydoctorListComponent, pathMatch: 'full', canActivate:[AuthGuard] },
          { path: 'm-resp-vacancy', component: MRepsVacancyComponent, pathMatch: 'full', canActivate:[AuthGuard] },
          // { path: 'mr-appoinment', component: AppointmentComponent, pathMatch: 'full' },



          { path: 'appoinment-recipt', component: AppoinmentReciptComponent, pathMatch: 'full', canActivate:[AuthGuard] },

          {
            path: 'brand-reminder-card', children: [
              { path: '', component: BrandReminderCardComponent, pathMatch: 'full', canActivate:[AuthGuard] },
              { path: 'upload-card', component: UploadCardComponent, pathMatch: 'full', canActivate:[AuthGuard] },
              { path: 'share-card', component: ShareCardComponent, pathMatch: 'full', canActivate:[AuthGuard] },
              { path: 'card-history', component: CardHistoryComponent, pathMatch: 'full', canActivate:[AuthGuard] },

            ]
          },

          {
            path: 'profile-settings', children: [
              { path: '', component: ProfileSettingsComponent, pathMatch: 'full', canActivate:[AuthGuard]  },
              { path: 'update-profile', component: UpdateProfileComponent, pathMatch: 'full', canActivate:[AuthGuard]  },
              { path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full', canActivate:[AuthGuard]  },


            ]
          },



        ],
      },
      {
        path: '',
        component: BlankLayoutComponent,
        children: [
          {
            path: 'mr-login',
            loadChildren: () =>
              import('./login/login.module').then(
                m => m.LoginModule)
          },

          { path: 'mr-forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
          { path: 'mr-register', component: RegisterComponent, pathMatch: 'full' },




        ]

      }

    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],

})


export class PatientRoutingModule { }
