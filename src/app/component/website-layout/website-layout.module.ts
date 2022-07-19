import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '~app/modules/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebsiteLayoutComponent } from './website-layout/website-layout.component';
import { WebsiteSidenavComponent } from './website-sidenav/website-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    WebsiteLayoutComponent,
    WebsiteSidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CommonModule ,     
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    WebsiteLayoutComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class WebsiteLayoutModule { }
