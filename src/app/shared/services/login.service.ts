import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Doctor } from '../_models/doctor';
import { Mr } from '../_models/mr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentMrSubject: BehaviorSubject<Mr>;
    public currentMr: Observable<Mr>;
    private currentDoctorSubject: BehaviorSubject<Doctor>;
    public currentDoctor: Observable<Doctor>;

    constructor(private http: HttpClient) {
      this.loadUserInfo();

        this.currentMrSubject = new BehaviorSubject<Mr>(JSON.parse(localStorage.getItem('currentMr')));
        this.currentMr = this.currentMrSubject.asObservable();
        this.currentDoctorSubject = new BehaviorSubject<Doctor>(JSON.parse(localStorage.getItem('currentDoctor')));
        this.currentDoctor = this.currentDoctorSubject.asObservable();
    }

    public get currentMrValue(): Mr {
        return this.currentMrSubject.value;
    }
    public get currentDoctorValue(): Doctor {
        return this.currentDoctorSubject.value;
    }

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


  // Mr Login
  userLogin(PhoneNumber: string, Password: string){
    // console.log(PhoneNumber, Password);
    return this.http.post<Mr>(`${environment.apiUrl}/api/MR/MRLogin`, {PhoneNumber, Password})
    .pipe(
      map(user => {
        console.log(user);
        // if(user){

          user.authdata = user.data.token
          localStorage.setItem('currentMr', JSON.stringify(user));

          this.currentMrSubject.next(user);
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

  }


  // Doctor Login
  doctorLogin(PhoneNumber: string, Password: string){
    // console.log(PhoneNumber, Password);
    return this.http.post<Doctor>(`${environment.apiUrl}/api/Doctor/DoctorLogin`, {PhoneNumber, Password})
    .pipe(
      map(user => {
        // console.log(Mr);
        // if(user){

          user.authdata = user.data.token
          localStorage.setItem('currentDoctor', JSON.stringify(user));

          this.currentDoctorSubject.next(user);
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

  // Doctor register
  registerDoctor(PhoneNumber: string, Name: string, Password:string) {
    console.log(PhoneNumber, Name, Password);
    return this.http.post(`${environment.apiUrl}/api/Doctor/CreateDoctor`,{PhoneNumber, Name, Password})
        .pipe(map(res => {
          console.log(res);
            return res;
        }));
  }

  //Mr logout api
  logout() {
    localStorage.removeItem('currentMr');
    this.currentMrSubject.next(null);
    localStorage.removeItem('createroom')
    localStorage.removeItem('doctors')
    delete localStorage['doctors'];
    localStorage.clear();
  }

  //Doctor logout api
  logoutdoctor() {
      localStorage.removeItem('currentDoctor');
      this.currentDoctorSubject.next(null);
      localStorage.removeItem('createroom')
      localStorage.removeItem('doctors')
      localStorage.clear();
  }
}
