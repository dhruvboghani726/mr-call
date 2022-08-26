import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError, } from 'rxjs/operators';
import { RestmanagerService } from '../utils/restmanagerService';
import { Mr } from '../_models/mr';
import { updateProfile } from '../_models/updateprofile';


const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class UpdateProfileService {
    apiEndPoint: string;
    _apiEndPoint: string = '';

    private restmanagerService: RestmanagerService;

    constructor(private http: HttpClient, restmanagerService: RestmanagerService) {
        this.restmanagerService = restmanagerService;
    }

    //Get All Appointment list api
  GetProfileData<T>(apiURL: string): Observable<T[]> {
    return this.http.get<T[]>(`${this._apiEndPoint}/${apiURL}`);
  }

//Update Profile API
UpdateProfile(formdata) {
    return this.http.post<updateProfile>(`${environment.apiUrl}/api/MR/MrProfile`,
      formdata
    )
      .pipe(map(res => {
        console.log(res,"res")
        console.log(formdata,"formdata")
        return res;
      }));
  }

}