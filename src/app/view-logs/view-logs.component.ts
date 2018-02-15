import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";

import { LogsService } from "./shared/logs.service";
import { ILogsRequestDto } from "./shared/ILogsRequestDto";
import { ILogEntryDto } from "./shared/ILogEntryDto";

@Component({
  selector: "app-view-logs",
  templateUrl: "./view-logs.component.html",
  styleUrls: ["./view-logs.component.css"]
})
export class ViewLogsComponent implements OnInit {
  public logs: ILogEntryDto[];

  constructor(private readonly logsService: LogsService) { }

  ngOnInit() {
    this.logsService.getLogs().subscribe(
      (logs) => {
        console.log(logs);
        this.logs = logs;
      },
      errorResponse => console.log(errorResponse));
  }
}
