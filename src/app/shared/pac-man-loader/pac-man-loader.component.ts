import { Component } from "@angular/core";
import { PacManLoaderService } from "./pac-man-loader.service";

@Component({
  selector: "pac-man-loader",
  templateUrl: "./pac-man-loader.component.html",
  styleUrls: ["./pac-man-loader.component.css"]
})
export class PacManLoader {
  ajaxCalls: number;

  constructor(private readonly pacManLoaderService: PacManLoaderService) {
    this.pacManLoaderService.ajaxCallsObservable.subscribe(ajaxCalls => {
      console.log(`subscribe: ${ajaxCalls}`);
      this.ajaxCalls = ajaxCalls;
    })
  }
}
