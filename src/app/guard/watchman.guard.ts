import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../services/user-info.service';

interface userToken{
  token : string;
  userType : string;
}

@Injectable({
  providedIn: 'root'
})
export class WatchmanGuard implements CanActivate {
  constructor(private userInfo:UserInfoService,
    private route:Router){}
  userObject:userToken =this.userInfo.defeaultUserObj;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const json:userToken={
        token :localStorage.getItem("token")!,
        userType : localStorage.getItem("userType")! 
      }
      this.userInfo.changeUser(json)   
      if(localStorage.getItem("token") != undefined){
        return true;
      }else{
        this.route.navigateByUrl("")
        return false;
      }
  }
}
