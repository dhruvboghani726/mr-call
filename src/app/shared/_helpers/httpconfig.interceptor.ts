import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from '../services/login.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {

  constructor(private service: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentMr = this.service.currentMrValue;
    const currentDoctor = this.service.currentDoctorValue;
    // console.log(currentDoctor.authdata, "currentDoctor")
    if (currentMr || currentDoctor) {
        if (currentMr && currentMr.authdata) {

    console.log(currentMr.authdata, "currentMR")
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentMr.authdata}`
                }
            });


        }
        if (currentDoctor && currentDoctor.authdata) {

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentDoctor.authdata}`
                }
            });

        }
        // if (currentAdmin && currentAdmin.authdata) {

        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentAdmin.authdata}`
        //         }
        //     });
        // }
    }

    // return next.handle(request);
    // const token = currentUser;

    // if (token) {
    //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

    // }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=UTF-8') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', '*')})
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')})
    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

                // this.errorDialogService.openDialog(event);
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {

            let data = {};
            data = {
                reason: error && error.error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            // this.errorDialogService.openDialog(data);
            // alert("getting error from server")

            return throwError(error);

        }));
  }

  
}
