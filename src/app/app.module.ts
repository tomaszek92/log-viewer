import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CustomFormsModule } from "ng2-validation";
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from "ng-pick-datetime";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ViewLogsComponent } from "./view-logs/view-logs.component";
import { ViewLogsFormComponent } from "./view-logs/form/form.component";
import { ViewLogsLogEntryComponent } from "./view-logs/log-entry/log-entry.component";
import { AboutComponent } from "./about/about.comoment";
import { appRoutes } from "./routes";
import { LogsService } from "./view-logs/shared/logs/logs.service";
import { ServersService } from "./view-logs/shared/servers/servers.service";
import { ApplicationsService } from "./view-logs/shared/applications/applications.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewLogsComponent,
    ViewLogsFormComponent,
    ViewLogsLogEntryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot(appRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule
  ],
  providers: [
    Title,
    LogsService,
    ServersService,
    ApplicationsService,
    { provide: OWL_DATE_TIME_LOCALE, useValue: "en"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
