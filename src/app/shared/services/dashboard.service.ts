import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  // public dashboard(): Observable<any> {
  //   return this.http.get<any>(`${environment.apiUrl}/api/Dashboard/DashboardCount`, {
  //     headers: {
  //       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1OTExNi05MWRmLTQ1MWMtYmEwMC0wMTQwN2Y3N2Y0M2YiLCJuYW1lIjoiNjc2NzY3NTY0NSIsImp0aSI6ImI4NDY4ZTYzLWE3NmUtNDNhNy1hYTZkLTBhZTRhYmQ2MDdhMCIsImV4cCI6MTY1OTUwMDEwNSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEifQ.gGPsDXi3dUjA3ekqhU6kQC2yiGCpjOUQmoDojWdCCGg"
  //     }
  //   })
  //     .pipe(map(res => {
  //       return res;
  //     }));
  // }
  dashboardcount(): Observable<any> {
    let header = new HttpHeaders().set("Authorization", "Berear" + localStorage.getItem("token"))
    return this.http.get(`${environment.apiUrl}/api/Dashboard/DashboardCount`, {
      headers: header
    })
      .pipe(map(res => {
        return res;
      }));
  }
}
