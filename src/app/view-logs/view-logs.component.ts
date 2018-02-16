import { Component } from "@angular/core";
import "rxjs/add/operator/map";

import { LogsService } from "./shared/logs.service";
import { ILogsRequestDto } from "./shared/ILogsRequestDto";
import { ILogEntryDto } from "./shared/ILogEntryDto";

@Component({
  selector: "app-view-logs",
  templateUrl: "./view-logs.component.html",
  styleUrls: ["./view-logs.component.css"]
})
export class ViewLogsComponent {
  public logs: ILogEntryDto[];

  constructor(private readonly logsService: LogsService) { }

  getLogs(logsRequest: ILogsRequestDto) {
    console.log(logsRequest);
    this.logsService
      .getLogs(logsRequest)
      .subscribe(response => this.logs = response);
  }
}
