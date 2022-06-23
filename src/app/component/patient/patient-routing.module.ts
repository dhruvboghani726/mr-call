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
            path: 'dashboard', children: [
              { path: '', component: DashboardComponent, pathMatch: 'full'},
            
            ],
          },
          { path: 'active-appoinment', component: ActiveAppointmentComponent, pathMatch: 'full' },  
          { path: 'book-an-appointment', component: BookAnAppointmentComponent, pathMatch: 'full' },  
          { path: 'mydoctor-list', component: MydoctorListComponent, pathMatch: 'full' },
          { path: 'm-resp-vacancy', component: MRepsVacancyComponent, pathMatch: 'full' },
          
          {
            path: 'brand-reminder-card', children: [
              { path: '', component: BrandReminderCardComponent, pathMatch: 'full' },
              { path: 'upload-card', component: UploadCardComponent, pathMatch: 'full'},
              { path: 'share-card', component: ShareCardComponent, pathMatch: 'full'},
              { path: 'card-history', component: CardHistoryComponent, pathMatch: 'full'},
              
            ]
          },
        
          {
            path: 'profile-settings', children: [
              { path: '', component: ProfileSettingsComponent, pathMatch: 'full' },
              { path: 'update-profile', component: UpdateProfileComponent, pathMatch: 'full'},
              { path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full'},
             
              
            ]
          },
         
         
        
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [ RouterModule ],

})


export class  PatientRoutingModule { }
