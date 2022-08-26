import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { RestmanagerService } from '../utils/restmanagerService';
import { Mr } from '../_models/mr';
import { DoctorListByMr } from '../_models/doctorlist';
import { BookAppointment } from '../_models/bookappoitnment';
import { SearchDoctor } from '../_models/search-doctor';
import { viewAppoinment } from '../_models/viewappoinment';
import { Drviewappoinment } from '../_models/DrViewappoinment';

@Injectable({
  providedIn: 'root',
})
export class BookAppoinmentService {
  apiEndPoint: string;
  _apiEndPoint: string = '';
  // Mrid = JSON.parse(localStorage.getItem('currentMr')).data.id
  private restmanagerService: RestmanagerService;

  constructor(
    private http: HttpClient,
    restmanagerService: RestmanagerService
  ) {
    this.restmanagerService = restmanagerService;
  }

  BookAppointment(
    DoctorId: string,
    Mrid: string,
    AppointmentDate: string,
    StartTime: string,
    EndTime: string
  ) {
    return this.restmanagerService
      .add<BookAppointment>(`/api/MR/BookAppointment`, {
        DoctorId: DoctorId,
        Mrid: Mrid,
        AppointmentDate: AppointmentDate,
        StartTime: StartTime,
        EndTime: EndTime,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  FavoriteDoctor(doctorId: string, mrId: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/Doctor/AddToMyList`, {
        doctorId,
        mrId,
      })

      .pipe(
        map((res) => {
          console.log(res);
          return res;
        })
      );
  }
  doctorlistbymr(mrId) {
    return this.restmanagerService
      .getWithParametersdata<DoctorListByMr>(`/api/MR/DoctorListByMr`, {
        mrId: mrId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  SearchDoctorByDate(date, mrId) {
    return this.restmanagerService
      .getWithParametersdata<DoctorListByMr>(`/api/Doctor/SearchDoctor`, {
        date: date,
        mrId: mrId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  SearchDoctor(city, data, mrId) {
    // let params = new HttpParams().set('city', city,);
    return this.restmanagerService
      .getWithParametersdata<SearchDoctor>(`/api/Doctor/SearchDoctor`, {
        city: city,
        data: data,
        mrId: mrId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  MrViewappoinment(appointmentId) {
    return this.restmanagerService
      .getWithParametersdata<viewAppoinment>(`/api/MR/ViewAppointment`, {
        appointmentId: appointmentId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
  DrViewappoinment(doctorId) {
    return this.restmanagerService
      .getWithParametersdata<Drviewappoinment>(
        `/api/MR/ViewAppointmentByDoctor`,
        { doctorId: doctorId }
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  // DrAllAppointment(mrId) {
  //     return this.restmanagerService.getWithParametersdata<Drviewappoinment>(`/api/MR/ViewAllAppointment`, { mrId: mrId })
  //         .pipe(map(data => {
  //             return data;
  //         }))
  // }

  //Get All Appointment list api
  DrAllAppointment<T>(apiURL: string): Observable<T[]> {
    return this.http.get<T[]>(`${this._apiEndPoint}/${apiURL}`);
  }

  //Update Appointment
  updateAppointment(
    AppointmentId: string,
    StartTime: string,
    EndTime: string,
    AppointmentDate: string,
    Type: string,
    Status: string,
    ReasonToCancel: String
  ) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/MR/UpdateAppointment`, {
        AppointmentId: AppointmentId,
        StartTime: StartTime,
        EndTime: EndTime,
        AppointmentDate: AppointmentDate,
        Type: Type,
        Status: Status,
        ReasonToCancel: ReasonToCancel,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
