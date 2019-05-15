import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginModel } from '../models/loginModel';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  parser: DOMParser;

  constructor(private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService) {
    this.parser = new DOMParser();
  }

  login(model: LoginModel): any {
    return this.http.post(environment.baseUrl,
      `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Body>
            <Login xmlns="http://tempuri.org/">
                <UserName>${model.username}</UserName>
                <Password>${model.password}</Password>
            </Login>
        </Body>
      </Envelope>`, { responseType: 'text' })
      .pipe(map(response => {
        const xml = this.parser.parseFromString(response, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);

        return JSON.parse(obj['SOAP-ENV:Envelope']['SOAP-ENV:Body']['NS1:LoginResponse'].return);
      }));
  }
}
