import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ILogsRequestDto } from "../shared/logs/ILogsRequestDto";
import { IDropDownListItem } from "../../shared/IDropDownListItem";
import { Severity } from "../shared/Severity";
import { LogsOrder } from "../shared/LogsOrder";
import * as moment from "moment";
import { EndpointsService } from "../shared/endpoints/endpoints.service";
import { ApplicationsService } from "../shared/applications/applications.service";
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: "app-view-logs-request-details",
  templateUrl: "./request-details.component.html"
})
export class ViewLogsRequestDetailsComponent implements OnInit {
  public logsRequest: ILogsRequestDto;
  public endpoints: IDropDownListItem[];
  public applications: IDropDownListItem[];
  public severities: IDropDownListItem[];
  public logsOrders: IDropDownListItem[];
  @Output() getLogsEvent: EventEmitter<ILogsRequestDto> = new EventEmitter();

  constructor(
    private readonly endpointsService: EndpointsService,
    private readonly applicationService: ApplicationsService) {

    this.logsRequest = {} as any;

    this.severities = [
      { id: Severity.Debug, description: "Debug" },
      { id: Severity.Diagnostic, description: "Diagnostic" },
      { id: Severity.Information, description: "Information" },
      { id: Severity.Warning, description: "Warning" },
      { id: Severity.Error, description: "Error" },
      { id: Severity.Fatal, description: "Fatal" }
    ];

    this.logsOrders = [
      { id: LogsOrder.First, description: "First" },
      { id: LogsOrder.Last, description: "Last" }
    ];
  }

  ngOnInit() {
    const getEndpoints = this.endpointsService.getEndpoints();
    const getApplications =  this.applicationService.getApplications();

    forkJoin(getEndpoints, getApplications).subscribe(response => {
      this.endpoints = [];
      for (const endpoint of response[0]) {
        this.endpoints.push({ id: endpoint.id, description: `${endpoint.name} - ${endpoint.address}` });
      }

      this.applications = [];
      for (const application of response[1]) {
        this.applications.push({ id: application.id, description: application.name });
      }

      this.logsRequest = {
        endpointId: this.endpoints[0].id,
        applicationId: this.applications[0].id,
        extraField1: "extra field 1",
        extraField2: "extra field 2",
        extraField3: "extra field 3",
        extraField4: "extra field 4",
        dateFrom: moment().startOf("day").toDate(),
        dateTo: moment().toDate(),
        maxLogs: 100,
        severity: Severity.Debug,
        logsOrder: LogsOrder.First,
        includeGeneralLogs: true
      };
    });
  }

  getLogs(): void {
    this.getLogsEvent.emit(this.logsRequest);
  }

  setToday(): void {
    this.logsRequest.dateFrom = moment().startOf("day").toDate();
  }

  setNowMinus1(): void {
    this.logsRequest.dateFrom = moment().subtract(1, "hour").toDate();
  }
}
