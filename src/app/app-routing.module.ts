import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'website/home', pathMatch: 'full' },

        { path: 'website', loadChildren: () => import('./component/website/website.module').then(m => m.WebsiteModule) },

        { path: 'doctor', loadChildren: () => import('./component/doctor/doctor.module').then(m => m.DoctorModule) },
        { path: 'mr', loadChildren: () => import('./component/patient/patient.module').then(m => m.PatientModule) },
      ],

    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
