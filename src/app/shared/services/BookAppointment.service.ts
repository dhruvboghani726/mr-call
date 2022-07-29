import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class BookAppoinmentService {

    constructor(private http: HttpClient) { }

    BookAppointment(DoctorId: string, Mrid: string, AppointmentDate: string, StartTime: number, EndTime: number) {
        let header = new HttpHeaders().set("Authorization", "Berear" + localStorage.getItem("token"))
        console.log(DoctorId, Mrid, AppointmentDate, StartTime, EndTime);

        return this.http.post(`${environment.apiUrl}/api/MR/BookAppointment`, { DoctorId, Mrid, AppointmentDate, StartTime, EndTime, headers: header })
            .pipe(map(res => {
                console.log(res);
                return res;
            }));
    }
}

