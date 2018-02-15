import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ViewLogsComponent } from "./view-logs/view-logs.component";
import { ViewLogsFormComponent } from "./view-logs/form/form.component";
import { ViewLogsLogEntryComponent } from "./view-logs/log-entry/log-entry.component";
import { AboutComponent } from "./about/about.comoment";
import { appRoutes } from "./routes";
import { LogsService } from "./view-logs/shared/logs.service";

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
    OwlNativeDateTimeModule
  ],
  providers: [
    Title,
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
