import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams } from "@angular/common/http";
import {} from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { HttpServiceBase } from "../../../shared/HttpServiceBase";
import { IServerDto } from "./IServerDto";

@Injectable()
export class ServersService extends HttpServiceBase {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  getServers(): Observable<IServerDto[]> {
    return this.httpClient
      .get(`${environment.webApiUrl}/servers`)
      .catch(this.handleError);
  }
}
