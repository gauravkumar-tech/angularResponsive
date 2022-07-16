import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { firstFormGroupVal } from '../user/dashboard/repairs/stepper-one/stepper-one.component';

@Injectable({
  providedIn: 'root'
})
export class RepairSaveService implements HttpInterceptor{

  public defeaultUserObj:firstFormGroupVal = {
      model: "",
      firstCtrl: "",
      telephone: "",
      complaint: ""
  }
  private userObject = new BehaviorSubject(this.defeaultUserObj);
  currentUserObject = this.userObject.asObservable();

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let jwtToken = req.clone({
      setHeaders:{
        Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYXVyYXYua3VtYXJAZ21haWwuY29tIiwiZXhwIjoxNjU3OTk2NzYzLCJpYXQiOjE2NTc5Nzg3NjN9.8FRzADhRYlsuBQeG_0EDq8f4_NoCdmE40VTawluozAEszlpibF3FXHWG_XOoIn3cjPd9ALMIxz_O4k6fxSejQA'
      }
    })
    return next.handle(jwtToken);
  }

  changeObj(form:firstFormGroupVal){
    this.userObject.next(form);
  }

  createRepairs(json:any):Observable<any>{
    return this.http.post(environment.baseApi +"api/repairs/",json)
  }

  getAllRepairs():Observable<any>{
    return this.http.get(environment.baseApi +"api/repairs/"+localStorage.getItem("token"))
  }

}
