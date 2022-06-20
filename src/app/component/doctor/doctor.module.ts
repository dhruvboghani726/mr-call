import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { DoctorRoutingModule } from './doctor-routing.module';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
   
    DashboardComponent,
     ],
  imports: [
   
 
  
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    FlexLayoutModule,
   
  ],
  providers: [ AsyncPipe, DatePipe ],
 

})
export class DoctorModule { }
