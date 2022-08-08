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

    private restmanagerService: RestmanagerService;

    constructor(private http: HttpClient, restmanagerService: RestmanagerService) {
        this.restmanagerService = restmanagerService;
    }

    // updateProfile(Mrid, Name, company, phonenumber, dob, division, speciality, City,) {
    //     return this.restmanagerService.add<updateProfile>(`/api/MR/MrProfile`, {
    //         Mrid,
    //         Name,
    //         company,
    //         phonenumber,
    //         dob,
    //         division,
    //         speciality,
    //         City,
    //         // ProductsName
    //     })
    //         .pipe(map(res => {
    //             return res;
    //         }));
    // }

}