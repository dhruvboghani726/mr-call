import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestmanagerService } from '../utils/restmanagerService';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class GetalldoctorService {

    constructor(private http: HttpClient, private restmangerService: RestmanagerService) { }

    Getalldoctor(): Observable<any> {
        let header = new HttpHeaders().set("Authorization", "Berear" + localStorage.getItem("token"))
        return this.http.get(`${environment.apiUrl}/api/Doctor/GetAllDoctor`, {
            headers: header


        })
            .pipe(map(res => {
                return res;
            }));
    }
}
// doctorId, doctorName, speciality, hospitalName
// doctorId: doctorId, doctorName: doctorName, speciality: speciality, hospitalName: hospitalName 