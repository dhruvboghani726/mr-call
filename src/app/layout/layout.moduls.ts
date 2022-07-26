import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../layout/sidenav/sidenav.component';

import { BlankLayoutComponent } from '../layout/blank-layout/blank-layout.component';
import { CommonLayoutComponent } from '../layout/common-layout/common-layout.component';
import {MaterialModule} from '../modules/material/material.module';
// import {ConsultingDialogComponent} from '../../../src/app/component/doctor/doctor-consulting/consulting-dialog/consulting-dialog.component';
import { SidenavdialogComponent } from './sidenav/sidenavdialog/sidenavdialog.component';
import { OfflinedialogComponent } from '../layout/sidenav/offlinedialog/offlinedialog.component';
import { DateAgoPipe } from '../shared/utils/pipe/date-ago.pipe';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [

   CommonModule,
   RouterModule,
   MaterialModule,
   FlexLayoutModule,
   FormsModule,
   ReactiveFormsModule,
  //  MatDialogModule,
  //  MatDialog,
  //  MatDialogRef
    
  ],
  declarations: [
 DateAgoPipe,
  
    CommonLayoutComponent,
    BlankLayoutComponent,
    SidenavComponent,
    SidenavdialogComponent,
  
    OfflinedialogComponent,
    
  ],
  entryComponents: [OfflinedialogComponent],
  exports: [
    CommonLayoutComponent,
    BlankLayoutComponent,
  ],
})
export class LayoutsModule { }