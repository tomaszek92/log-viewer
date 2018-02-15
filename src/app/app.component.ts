import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private readonly _pageTitlePrefix = "Log Viewer - ";

  constructor(private readonly router: Router, private readonly titleService: Title) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const pageTitleSuffix = this.router.routerState.snapshot.root.children[0].data["pageTitle"] || "";
          this.titleService.setTitle(`${this._pageTitlePrefix}${pageTitleSuffix}`);
        }
      });
  }
}
