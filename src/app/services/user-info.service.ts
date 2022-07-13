import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface userToken{
  token : string;
  userType : string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public defeaultUserObj:userToken = {
    token : "",
    userType : ""
  }
  private userObject = new BehaviorSubject<userToken>(this.defeaultUserObj);
  currentUserObject = this.userObject.asObservable();

  constructor() { }

  changeUser(userObj:userToken){
    this.userObject.next(userObj);
  }
}
