import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ViewLogsComponent } from "./view-logs/view-logs.component";
import { AuthGuard } from "./shared/auth-guard";
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
  { path: "login", component: LoginComponent, data: { pageTitle: "Login" } },
  { path: "viewLogs", component: ViewLogsComponent, data: { pageTitle: "View Logs" }, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent, data: { pageTitle: "About" } },
  { path: "", redirectTo: "/viewLogs", pathMatch: "full" }
];
