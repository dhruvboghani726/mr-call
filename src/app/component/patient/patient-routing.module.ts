import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '../../layout/layout.moduls';

import { BlankLayoutComponent } from '../../layout/blank-layout/blank-layout.component';

import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component'

import { DashboardComponent } from './dashboard/dashboard.component';



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
            
            ]
          }         
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [ RouterModule ],

})


export class  PatientRoutingModule { }
