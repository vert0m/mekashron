import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginModel } from '../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  entityModel: any;

  isSuccessful = null;

  constructor(private authService: AuthService) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.model).subscribe(response => {
      this.entityModel = response;
    });
  }

  buttonIsPressed(isPressed: any) {
    if (isPressed) {
      this.entityModel = null;
    }
  }
}
