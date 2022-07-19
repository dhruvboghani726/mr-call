import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsiteLayoutComponent } from '../website-layout/website-layout/website-layout.component';
import { WebsiteLayoutModule } from '../website-layout/website-layout.module';
import { FaqComponent } from './faq/faq.component';




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: WebsiteLayoutComponent, children: [
          { path: 'home', component: HomeComponent, pathMatch: 'full' },
          // { path: 'about-us', component: AboutusComponent, pathMatch: 'full' },
      
          { path: 'faq', component: FaqComponent, pathMatch: 'full' }
        ]
      },
    ]),
    WebsiteLayoutModule,
  ],
  exports: [RouterModule],
})
export class WebsiteRoutingModule { }
