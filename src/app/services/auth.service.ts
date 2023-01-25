import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: BehaviorSubject<boolean> = new  BehaviorSubject(false);

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  isAuthenticated(): Observable<boolean>{
    return this.isLoggedIn.asObservable();
  }
}
