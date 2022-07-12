import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface userDto{
  name: string,
  password: string,
  email: string,
  about: string,
} 


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  registeration(json : userDto):Observable<any>{
   return this.http.post(environment.baseApi + "api/v1/auth/register",json)
  }

}
