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
import { ViewLogsRequestDetailsComponent } from "./view-logs/request-details/request-details.component";
import { ViewLogsLogEntryComponent } from "./view-logs/log-entry/log-entry.component";
import { ViewLogsFormattingDetailsComponent } from "./view-logs/formatting-details/formatting-details.component";
import { AboutComponent } from "./about/about.comoment";
import { appRoutes } from "./routes";
import { LogsService } from "./view-logs/shared/logs/logs.service";
import { EndpointsService } from "./view-logs/shared/endpoints/endpoints.service";
import { ApplicationsService } from "./view-logs/shared/applications/applications.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewLogsComponent,
    ViewLogsRequestDetailsComponent,
    ViewLogsLogEntryComponent,
    ViewLogsFormattingDetailsComponent,
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
    EndpointsService,
    ApplicationsService,
    { provide: OWL_DATE_TIME_LOCALE, useValue: "en"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
