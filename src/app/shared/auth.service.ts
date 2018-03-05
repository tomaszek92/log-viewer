import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

import { IUserDto } from "./IUserDto";
import { HttpServiceBase } from "./HttpServiceBase";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService extends HttpServiceBase {
  private readonly localStorage_token_key: string = "token";
  private token: string;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  login(user: IUserDto): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-url; charset=urf-8"
    });
    const data = `grant_type=password&password=${user.password}&username=${user.email}`;

    return this.httpClient.post(`${environment.loginUrl}`, data, { headers: headers });
  }

  setToken(token: string): void {
    localStorage.setItem(this.localStorage_token_key, token);
    this.token = token;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(this.localStorage_token_key);
    }
    return this.token;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !(token == undefined || token === "");
  }
}
