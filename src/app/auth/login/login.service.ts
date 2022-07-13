import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface userToken {  
  username: String;  
  password: String;  
}  

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(json : userToken):Observable<any>{
   return this.http.post(environment.baseApi + "api/v1/auth/login",json)
  }

}
