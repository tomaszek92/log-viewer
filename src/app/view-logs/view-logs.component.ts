import { Component } from "@angular/core";
import "rxjs/add/operator/map";
import * as moment from "moment";

import { LogsService } from "./shared/logs/logs.service";
import { ILogsRequestDto } from "./shared/logs/ILogsRequestDto";
import { ILogEntryDto } from "./shared/logs/ILogEntryDto";

@Component({
  selector: "app-view-logs",
  templateUrl: "./view-logs.component.html",
  styleUrls: ["./view-logs.component.css"]
})
export class ViewLogsComponent {
  public logs: ILogEntryDto[];

  constructor(private readonly logsService: LogsService) {
  }

  getLogs(logsRequest: ILogsRequestDto) {
    console.log(logsRequest);
    this.logsService
      .getLogs(logsRequest)
      .subscribe(response => this.logs = response);
  }
}
