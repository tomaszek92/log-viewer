import { Component } from "@angular/core";
import { ILogsRequestDto } from "../shared/ILogsRequestDto";
import { IDropDownListItem } from "../../shared/IDropDownListItem";
import { Severity } from "../shared/Severity";
import { LogsOrder } from "../shared/LogsOrder";
import * as moment from "moment";

@Component({
  selector: "app-view-logs-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class ViewLogsFormComponent {
  public logsRequest: ILogsRequestDto;
  public servers: IDropDownListItem[];
  public applications: IDropDownListItem[];
  public severities: IDropDownListItem[];
  public logsOrders: IDropDownListItem[];

  constructor() {
    this.servers = [
      { id: 1, description: "TEST" },
      { id: 2, description: "STAGE" },
      { id: 3, description: "PROD" },
    ];

    this.applications = [
      { id: 100, description: "PMS Integrator" },
      { id: 110, description: "PIOR" },
      { id: 130, description: "PIPO" },
    ];

    this.severities = [
      { id: Severity.Debug, description: "Debug" },
      { id: Severity.Info, description: "Info" },
      { id: Severity.Warning, description: "Warning" },
      { id: Severity.Error, description: "Error" },
      { id: Severity.Fatal, description: "Fatal" }
    ];

    this.logsOrders = [
      { id: LogsOrder.First, description: "First" },
      { id: LogsOrder.Last, description: "Last" }
    ];

    this.logsRequest = {
      serverId: this.servers[0].id,
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
    console.log(this.logsRequest);
  }

  getLogs(): void {
    console.log(this.logsRequest);
  }

  setToday(): void {
    this.logsRequest.dateFrom = moment().startOf("day").toDate();
  }

  setNowMinus1(): void {
    this.logsRequest.dateFrom = moment().subtract(1, "hour").toDate();
  }
}
