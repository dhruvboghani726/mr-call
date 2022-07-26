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
        return this.http.get(`${environment.apiUrl}/api/Doctor/GetAllDoctor`, {
        })
            .pipe(map(res => {
                return res;
            }));
    }
}
