import { Component, Output } from "@angular/core";

@Component({
  selector: "app-view-logs-formatting-details",
  templateUrl: "./formatting-details.component.html"
})
export class ViewLogsFormattingDetailsComponent {
  showSource: boolean = false;
  utcAsLocal: boolean = false;
  detailedExceptions: boolean = false;
}
