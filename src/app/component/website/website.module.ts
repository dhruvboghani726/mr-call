import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '~app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { HomeComponent } from './home/home.component';
import { WebsiteRoutingModule } from './website-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FaqComponent } from './faq/faq.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent,
    FaqComponent
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    WebsiteRoutingModule,
  ]
})
export class WebsiteModule { }
