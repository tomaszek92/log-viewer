import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams } from "@angular/common/http";
import {} from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { HttpServiceBase } from "../../../shared/HttpServiceBase";
import { IApplicationDto } from "./IApplicationDto";


@Injectable()
export class ApplicationsService extends HttpServiceBase {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  getApplications(): Observable<IApplicationDto[]> {
    return this.httpClient
      .get(`${environment.webApiUrl}/applications`)
      .catch(this.handleError);
  }
}
