import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {} from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import * as moment from "moment";

import { environment } from "../../../../environments/environment";
import { ILogEntryDto } from "./ILogEntryDto";
import { ILogsRequestDto } from "./ILogsRequestDto";
import { HttpServiceBase } from "../../../shared/HttpServiceBase";
import { AuthService } from "../../../shared/auth.service";

@Injectable()
export class LogsService extends HttpServiceBase {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService) {
    super();
  }

  getLogs(request: ILogsRequestDto): Observable<ILogEntryDto[]> {
    let params = new HttpParams();
    params = params.append("endpointId", request.endpointId.toString());
    params = params.append("applicationId", request.applicationId.toString());
    params = params.append("extraField1", request.extraField1);
    params = params.append("extraField2", request.extraField2);
    params = params.append("extraField3", request.extraField3);
    params = params.append("extraField4", request.extraField4);
    params = params.append("dateFrom", moment(request.dateFrom).toISOString());
    params = params.append("dateTo", moment(request.dateTo).toISOString());
    params = params.append("maxLogs", request.maxLogs.toString());
    params = params.append("severity", (request.severity as number).toString());
    params = params.append("logsOrder", request.logsOrder.toString());
    params = params.append("includeGeneralLogs", request.includeGeneralLogs.toString());

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.authService.getToken()}`
    });

    return this.httpClient
      .get(`${environment.webApiUrl}/logs`, { params, headers})
      .catch(this.handleError);
  }
}
