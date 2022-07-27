import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialModule } from '../../../modules/material/material.module';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
    declarations: [
        // LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        MatProgressSpinnerModule,

    ],
    providers: []
})
export class LoginModule { }
