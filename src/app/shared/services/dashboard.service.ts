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

  dashboardcount(): Observable<any> {

    return this.http.get(`${environment.apiUrl}/api/Dashboard/DashboardCount`, {
    })
      .pipe(map(res => {
        return res;
      }));
  }
}
