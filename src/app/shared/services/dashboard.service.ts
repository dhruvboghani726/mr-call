import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { dashboard } from '../_models/dashboard';
import { RestmanagerService } from '../utils/restmanagerService';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private restmanagerService: RestmanagerService;
  constructor(private http: HttpClient,
    restmanagerService: RestmanagerService) { this.restmanagerService = restmanagerService; }

  dashboardData(id) {
    return this.restmanagerService
      .getWithParametersdata<dashboard>(`/api/Dashboard/DashboardCount`, {
        id: id,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
