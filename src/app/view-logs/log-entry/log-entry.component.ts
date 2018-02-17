import { Component, Input } from "@angular/core";
import { ILogEntryDto } from "../shared/logs/ILogEntryDto";
import * as moment from "moment";
import { Severity } from "../shared/Severity";
import { IFormattingSettings } from "../formatting-details/IFormattingSettings";

@Component({
  selector: "app-view-logs-log-entry",
  templateUrl: "./log-entry.component.html"
})
export class ViewLogsLogEntryComponent {
  @Input() logEntry: ILogEntryDto;
  @Input() formattingSettings: IFormattingSettings;
  severity = Severity;

  convertUtcToLocal(utcDate: Date): Date {
    return moment.utc(utcDate).local().toDate();
  }

  getSeverityString(severity: Severity): string {
    return Severity[severity];
  }
}
