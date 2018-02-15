import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.comoment";
import { ViewLogsComponent } from "./view-logs/view-logs.component";

export const appRoutes: Routes = [
  { path: "viewLogs", component: ViewLogsComponent, data: { pageTitle: "View Logs"} },
  { path: "about", component: AboutComponent, data: { pageTitle: "About"} },
  { path: "", redirectTo: "/viewLogs", pathMatch: "full" }
];
