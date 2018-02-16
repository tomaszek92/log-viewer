import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams } from "@angular/common/http";
import {} from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { HttpServiceBase } from "../../../shared/HttpServiceBase";
import { IEndpointDto } from "./IEndpointDto";

@Injectable()
export class EndpointsService extends HttpServiceBase {

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  getEndpoints(): Observable<IEndpointDto[]> {
    return this.httpClient
      .get(`${environment.webApiUrl}/endpoints`)
      .catch(this.handleError);
  }
}
