import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { HttpServiceBase } from "../../../shared/HttpServiceBase";
import { IEndpointDto } from "./IEndpointDto";
import { AuthService } from "../../../shared/auth.service";

@Injectable()
export class EndpointsService extends HttpServiceBase {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService) {
    super();
  }

  getEndpoints(): Observable<IEndpointDto[]> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.authService.getToken()}`
    });

    return this.httpClient
      .get(`${environment.webApiUrl}/endpoints`, { headers: headers })
      .catch(this.handleError);
  }
}
