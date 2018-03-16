import { Component, Output } from "@angular/core";
import { IFormattingSettings } from "./IFormattingSettings";

@Component({
  selector: "app-view-logs-formatting-details",
  templateUrl: "./formatting-details.component.html"
})
export class ViewLogsFormattingDetailsComponent {
  formattingSettings: IFormattingSettings;

  constructor() {
    this.formattingSettings = {
      showSource: false,
      utcAsLocal: true,
      detailedExceptions: true,
      showExtraField1: true,
      showExtraField2: true,
      showExtraField3: true,
      showExtraField4: true,
    };
  }
}
