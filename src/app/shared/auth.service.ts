import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

import { IUserDto } from "./IUserDto";
import { HttpServiceBase } from "./HttpServiceBase";
import { environment } from "../../environments/environment";
import { LocalStorageExpiredService } from "./local-storage-expired/local-storage-expired.service";

@Injectable()
export class AuthService extends HttpServiceBase {
  private readonly localStorage_token_key: string = "token";

  constructor(
    private readonly httpClient: HttpClient,
    private readonly localStorageExpired: LocalStorageExpiredService) {
    super();
  }

  login(user: IUserDto): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-url; charset=urf-8"
    });
    const data = `grant_type=password&password=${user.password}&username=${user.email}`;

    return this.httpClient.post(`${environment.loginUrl}`, data, { headers: headers });
  }

  setToken(token: string, expires: Date): void {
    this.localStorageExpired.setItem(this.localStorage_token_key, token, expires);
  }

  getToken(): string {
    return this.localStorageExpired.getItem(this.localStorage_token_key);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !(token == undefined || token === "");
  }
}
