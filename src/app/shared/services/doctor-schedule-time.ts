import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, scheduled } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RestmanagerService } from '../utils/restmanagerService';
import { doctorscheduletimeadd } from '../_models/doctorScheduleTime';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class DoctorScheduledTimeService {
    apiEndPoint: string;

    private restmanagerService: RestmanagerService;

    constructor(private http: HttpClient, private restmangerService: RestmanagerService) {
        this.restmanagerService = restmangerService;
    }

    // doctorscheduletimeadd(doctorId: string, docSchedules: string) {
    //     return this.http.post(`${environment.apiUrl}/api/DoctorSchedule/addDoctorSchedule`, {
    //         doctorId, docSchedules
    //     })
    //         .pipe(map(res => {
    //             console.log(res);
    //             return res;
    //         }));
    // }

    // working use
    doctorscheduletimeadd(doctorId: string, docSchedules: []) {
        return this.restmanagerService.add<doctorscheduletimeadd>(`/api/DoctorSchedule/addDoctorSchedule`, {
            doctorId,
            docSchedules
        })
            .pipe(map(res => {
                return res;
            }));
    }

    doctorscheduletime(id): Observable<any> {
        return this.http.get(`${environment.apiUrl}/api/DoctorSchedule/GetDoctorSchedule?doctorId=${id}`)
            .pipe(map(res => {
                return res;
            }));
    }
}
