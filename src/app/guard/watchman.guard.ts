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
       
      this.userInfo.currentUserObject.subscribe(info =>this.userObject=info);
      if(this.userObject.token != ""){
        return true;
      }else{
        this.route.navigateByUrl("")
        return false;
      }
  }
}
