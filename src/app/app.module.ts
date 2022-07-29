import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './layout/sidenav/logout/logout.component';
import { HttpconfigInterceptor } from './shared/_helpers/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
