import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Mr } from '../../../shared/_models/mr';
import { User } from '../../../shared/_models/user';
// import { Mr } from '~models/mr'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private currentMrSubject: BehaviorSubject<Mr>;
    public currentMr: Observable<Mr>;

    constructor(private http: HttpClient) {
      this.loadUserInfo();

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentMrSubject = new BehaviorSubject<Mr>(JSON.parse(localStorage.getItem('currentMr')));
        this.currentMr = this.currentMrSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public get currentMrValue(): Mr {
        return this.currentMrSubject.value;
    }

  // const API_URL = environment.apiUrl;

  // constructor(private http: HttpClient) {
    
  //  }

   userInfo: BehaviorSubject<any> = new BehaviorSubject(null);

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn(){
    return this.getToken() != null;
  }

  loadUserInfo(){
    const userdata = this.userInfo.getValue();
    if(!userdata){
      const accesstoken = localStorage.getItem("token");
      if(accesstoken){
        const data = {
          access_token : accesstoken,
        }
      }
    }
  }

  userLogin(PhoneNumber: string, Password: string){
    // console.log(PhoneNumber, Password);

    return this.http.post<Mr>(`${environment.apiUrl}/api/MR/MRLogin`, {PhoneNumber, Password})
    .pipe(
      map(user => {
        console.log(user);
        // if(user){

          user.authdata = user.data.token
          localStorage.setItem('currentUser', JSON.stringify(user));

          this.currentUserSubject.next(user);
          localStorage.setItem("access_token", user.authdata);
          // console.log(user)
          // const data = {
          //   access_token : user.authdata
          // }

          // this.userInfo.next(data);
          return user;
        // }
        // return false;
      })
    )

    // var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    // return this.http.post<any>( `${environment.apiUrl}api/MR/MRLogin`, {PhoneNumber, Password}, {headers: reqHeader});

  }


  // Mr register
  registerUser(PhoneNumber: string, Name: string, Password:string) {
    console.log(PhoneNumber, Name, Password);
    return this.http.post(`${environment.apiUrl}/api/MR/CreateMR`,{PhoneNumber, Name, Password})
        .pipe(map(res => {
          console.log(res);
            return res;
        }));
  }
}
