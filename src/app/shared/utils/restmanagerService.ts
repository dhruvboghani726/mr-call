import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestmanagerService {
  apiEndPoint: string;

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiUrl;
  }

  getAll<T>(apiURL: string): Observable<T[]> {
    return this.mapAndCatchError(
      this.http.get<T[]>(`${this.apiEndPoint}/${apiURL}`)
    );
  }
  get<T>(apiURL: string): Observable<T> {
    return this.mapAndCatchError(
      this.http.get<T>(`${this.apiEndPoint}/${apiURL}`
      )
    );
  }
  getnew<T>(apiURL: string): Observable<T> {
    return this.mapAndCatchErrorwithoutdata(
      this.http.get<T>(`${this.apiEndPoint}/${apiURL}`
      )
    );
  }
  add<T>(apiURL: string, data: T): Observable<T> {
    return this.mapAndCatchError(
      this.http.post<T>(
        `${this.apiEndPoint}/${apiURL}`,
        data)
    );
  }
  getadd<T>(apiURL: string, data: T): Observable<T> {
    return this.mapAndCatchError(
      this.http.get<T>(
        `${this.apiEndPoint}/${apiURL}`,
        data)
    );
  }
  update<T>(apiURL: string, data: T): Observable<T> {
    return this.mapAndCatchError(
      this.http.put<T>(
        `${this.apiEndPoint}/${apiURL}`,
        data)
    );
  }
  getWithParameters<T>(apiURL: string, params: any): Observable<T> {
    return this.mapAndCatchError(
      this.http.get<T>(this.apiEndPoint + '/' + apiURL + '?' + this.objectToQueryString(params)
      )
    );
  }
  private mapAndCatchError<TData>(response: Observable<TData>): Observable<TData> {
    return response.pipe(
      map((r: any) => {
        return r.data;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(null);
      })
    );
  }




  private objectToQueryString(obj: any): string {
    const parameters = [];
    for (const parameter in obj) {
      if (obj.hasOwnProperty(parameter)) {
        parameters.push(encodeURIComponent(parameter) + '=' + encodeURIComponent(obj[parameter]));
      }
    }
    return parameters.join('&');
  }

  // new withou data
  addwithout<T>(apiURL: string, data: T): Observable<T> {
    return this.mapAndCatchErrorwithoutdata(
      this.http.post<T>(
        `${this.apiEndPoint}/${apiURL}`,
        data)
    );
  }
  getWithParametersdata<T>(apiURL: string, params: any): Observable<T> {
    return this.mapAndCatchErrorwithoutdata(
      this.http.get<T>(this.apiEndPoint + '/' + apiURL + '?' + this.objectToQueryString(params)
      )
    );
  }
  private mapAndCatchErrorwithoutdata<TData>(response: Observable<TData>): Observable<TData> {

    return response.pipe(
      map((r: any) => {
        return r;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(error);
      })
    );
  }

}
