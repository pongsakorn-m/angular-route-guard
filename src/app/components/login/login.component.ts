import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  isLoggedIn: Observable<boolean> = this.authService.isAuthenticated()

  login() {
    this.authService.login();
    //this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    //this.isLoggedIn = this.authService.isAuthenticated();
  }
}
