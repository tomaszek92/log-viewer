import { Component, Output } from "@angular/core";

@Component({
  selector: "app-view-logs-formatting-details",
  templateUrl: "./formatting-details.component.html"
})
export class ViewLogsFormattingDetailsComponent {
  @Output() showSource: boolean;
  @Output() utcAsLocal: boolean;
  @Output() detailedExceptions: boolean;
}
