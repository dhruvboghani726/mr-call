import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class FavoritedoctorService {

    constructor(private http: HttpClient) { }

    FavoriteDoctor(doctorId: string, mrId: string) {


        return this.http.post(`${environment.apiUrl}/api/Doctor/AddToMyList`, {
            doctorId, mrId,
        })
            .pipe(map(res => {
                console.log(res);
                return res;
            }));
    }
}  