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

  isValidUsername = true;
  isValidPassword = true;

  constructor(private authService: AuthService) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login(): void {
    if (this.model.password === '' || this.model.password === null) {
      this.isValidPassword = false;
    } else {
      this.isValidPassword = true;
    }

    if (this.model.username === '' || this.model.username === null) {
      this.isValidUsername = false;
    } else {
      this.isValidUsername = true;
    }

    if (this.isValidPassword === true &&
      this.isValidUsername === true) {
        this.authService.login(this.model).subscribe(response => {
          this.entityModel = response;
        });
    } else {
     return;
    }
  }

  buttonIsPressed(isPressed: any) {
    if (isPressed) {
      this.entityModel = null;
    }
  }
}
