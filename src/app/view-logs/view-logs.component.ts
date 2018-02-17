import { Component } from "@angular/core";
import "rxjs/add/operator/map";
import * as moment from "moment";

import { LogsService } from "./shared/logs/logs.service";
import { ILogsRequestDto } from "./shared/logs/ILogsRequestDto";
import { ILogEntryDto } from "./shared/logs/ILogEntryDto";

@Component({
  selector: "app-view-logs",
  templateUrl: "./view-logs.component.html",
  styleUrls: ["./view-logs.component.css"]
})
export class ViewLogsComponent {
  public logs: ILogEntryDto[];

  constructor(private readonly logsService: LogsService) {
    this.logs = [];
    for (const log of logs) {
      this.logs.push({
        creationDateUtc: moment(log.creationDateUtc).toDate(),
        exception: log.exception,
        extraField1: log.extraField1,
        extraField2: log.extraField2,
        extraField3: log.extraField3,
        extraField4: log.extraField4,
        message: log.message,
        severity: log.severity,
        source: log.source
      });
    }
  }

  getLogs(logsRequest: ILogsRequestDto) {
    console.log(logsRequest);
    this.logsService
      .getLogs(logsRequest)
      .subscribe(response => this.logs = response);
  }
}

var logs = [{
	"severity": 2,
	"message": "[Authentication Manager] Invoked with applicationId: 100, clientIpAddress: 104.40.229.28, clientAuthenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, clientApplicationId: 110",
	"source": "Yp.Common.Base.Wcf.Security.WcfSecurityManager",
	"exception": null,
	"extraField1": "test",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.178Z"
}, {
	"severity": 0,
	"message": "Authentication succeeded. ServerApplicationId: 100, clientApplicationId 110, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, remote IP: 104.40.229.28",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": "extraField1",
	"extraField2": "extraField2",
	"extraField3": "extraField3",
	"extraField4": "extraField4",
	"creationDateUtc": "2018-02-15T23:01:19.203Z"
}, {
	"severity": 2,
	"message": "Integration status requested.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.204Z"
}, {
	"severity": 2,
	"message": "Integration status being returned: Finished.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.205Z"
}, {
	"severity": 2,
	"message": "Integration start requested.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.286Z"
}, {
	"severity": 2,
	"message": "[Authentication Manager] Invoked with applicationId: 100, clientIpAddress: 104.40.229.28, clientAuthenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, clientApplicationId: 110",
	"source": "Yp.Common.Base.Wcf.Security.WcfSecurityManager",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.287Z"
}, {
	"severity": 0,
	"message": "Authentication succeeded. ServerApplicationId: 100, clientApplicationId 110, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, remote IP: 104.40.229.28",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.288Z"
}, {
	"severity": 2,
	"message": "Integration start requested (inner, not WCF method).",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.289Z"
}, {
	"severity": 0,
	"message": "StartIntegration",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.591Z"
}, {
	"severity": 0,
	"message": "Calling CreateHotelIntegrator",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.592Z"
}, {
	"severity": 0,
	"message": "The hotel 496 uses integrator class: Protel",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.IntegratorFactory",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.6Z"
}, {
	"severity": 0,
	"message": "Calling AddHistoryEntry",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.631Z"
}, {
	"severity": 0,
	"message": "Calling ActualIntegrationStart",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.662Z"
}, {
	"severity": 2,
	"message": "Integration started, id: abb50e86-908b-4e56-bf24-45c42d9c35d5",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.663Z"
}, {
	"severity": 2,
	"message": "Integration startup result: Success",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.663Z"
}, {
	"severity": 2,
	"message": "PMS settings: {\"ContinuousIntegrationMaxTimeSpan\":null,\"IgnoreBookingGroupCodesWhenStoring\":true,\"AutomaticallyStoreCommunicationHistory\":false}",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.664Z"
}, {
	"severity": 0,
	"message": "Integration Options -> HotelId: 496, UseLastCommunicationFromDatabase: False, LastCommunicationFromDatabaseStepsBack: , IsFirstIntegraiton: False, IsAutomaticIntegration: True, IntegrationTimeOverride: , TreatAsFirstRun: False, IsContinuousIntegration: False, ReportDate: 2/16/2018 12:00:00 AM, files: Extract_RMS_YP_DATA_496_20180215.csv,Extract_RMS_YP_PROP_496_20180215.csv,Extract_RMS_YP_RPLAN_496_20180215.csv,Extract_RMS_YP_RTYPE_496_20180215.csv",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.665Z"
}, {
	"severity": 2,
	"message": "Number of report analyzers for the integration: 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.665Z"
}, {
	"severity": 2,
	"message": "PmsHotel params: HotelId: 496, PmsId: 24, PmsHotelCode: , HotelName: Polonia, BookingStatusMappingJson: , BookingSegmentMappingJson: , BookingChannelMappingJson: , BookingSourceMappingJson: , BookingRoomTypeMappingJson: , BookingRatePlanMappingJson: , LastSuccessfullIntegrationModificationEndDate: 2/15/2018 12:00:00 AM, BookingStatusBeforeCancellation: Confirmed, UseGrossRevenue: True, AdditionalSettings: {\"IsStayDayStatuses\":[\"Confirmed\"],\"CsvDateFormat\":\"dd/MM/yyyy\",\"EmptySegment\":\"Empty\",\"NullDate\":\"1900-01-01T00:00:00\",\"CsvEncoding\":null,\"DefaultChmRatePlanId\":3889}, PerformPostIntegrationStepsRequestPior: True, LastFullySuccessfulReportDate: 2/15/2018 12:00:00 AM, StatusId: 2, DataFilter: ",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.675Z"
}, {
	"severity": 0,
	"message": "PerformAnalysis: Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.682Z"
}, {
	"severity": 2,
	"message": "Starting report data extraction... (File name: Extract_RMS_YP_DATA_496_20180215.csv)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.683Z"
}, {
	"severity": 0,
	"message": "Read AdditionalSettings from PmsHotel",
	"source": "Yp.Rms.PmsIntegrator.Library.Domain.Integrations.GenericPmsHotelAdditionalSettingsRetriever`1[[Yp.Rms.Common.Protel.ProtelAdditionalSettings, Yp.Rms.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]",
	"exception": null,
	"extraField1": "hotel: 496",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.683Z"
}, {
	"severity": 2,
	"message": "[Authentication Manager] Invoked with applicationId: 100, clientIpAddress: 104.40.229.28, clientAuthenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, clientApplicationId: 110",
	"source": "Yp.Common.Base.Wcf.Security.WcfSecurityManager",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.721Z"
}, {
	"severity": 0,
	"message": "Authentication succeeded. ServerApplicationId: 100, clientApplicationId 110, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, remote IP: 104.40.229.28",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.722Z"
}, {
	"severity": 2,
	"message": "Integration status being returned: Finished.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.723Z"
}, {
	"severity": 2,
	"message": "Integration status requested.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.723Z"
}, {
	"severity": 2,
	"message": "Integration start requested.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.829Z"
}, {
	"severity": 2,
	"message": "[Authentication Manager] Invoked with applicationId: 100, clientIpAddress: 104.40.229.28, clientAuthenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, clientApplicationId: 110",
	"source": "Yp.Common.Base.Wcf.Security.WcfSecurityManager",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.83Z"
}, {
	"severity": 0,
	"message": "Authentication succeeded. ServerApplicationId: 100, clientApplicationId 110, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, remote IP: 104.40.229.28",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.831Z"
}, {
	"severity": 2,
	"message": "Integration start requested (inner, not WCF method).",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.832Z"
}, {
	"severity": 0,
	"message": "StartIntegration",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.859Z"
}, {
	"severity": 0,
	"message": "Calling CreateHotelIntegrator",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.86Z"
}, {
	"severity": 0,
	"message": "The hotel 6566 uses integrator class: Protel",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.IntegratorFactory",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.868Z"
}, {
	"severity": 0,
	"message": "Calling AddHistoryEntry",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.937Z"
}, {
	"severity": 0,
	"message": "Calling ActualIntegrationStart",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.976Z"
}, {
	"severity": 0,
	"message": "Integration Options -> HotelId: 6566, UseLastCommunicationFromDatabase: False, LastCommunicationFromDatabaseStepsBack: , IsFirstIntegraiton: False, IsAutomaticIntegration: True, IntegrationTimeOverride: , TreatAsFirstRun: False, IsContinuousIntegration: False, ReportDate: 2/16/2018 12:00:00 AM, files: Extract_RMS_YP_DATA_6566_20180215.csv,Extract_RMS_YP_PROP_6566_20180215.csv,Extract_RMS_YP_RPLAN_6566_20180215.csv,Extract_RMS_YP_RTYPE_6566_20180215.csv",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.977Z"
}, {
	"severity": 2,
	"message": "Number of report analyzers for the integration: 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.977Z"
}, {
	"severity": 2,
	"message": "PMS settings: {\"ContinuousIntegrationMaxTimeSpan\":null,\"IgnoreBookingGroupCodesWhenStoring\":true,\"AutomaticallyStoreCommunicationHistory\":false}",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.977Z"
}, {
	"severity": 2,
	"message": "Integration started, id: 189eae6c-0a81-497b-9738-5a36a012f25f",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.977Z"
}, {
	"severity": 2,
	"message": "Integration startup result: Success",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:19.977Z"
}, {
	"severity": 2,
	"message": "PmsHotel params: HotelId: 6566, PmsId: 24, PmsHotelCode: , HotelName: Hotel Marta, BookingStatusMappingJson: , BookingSegmentMappingJson: , BookingChannelMappingJson: , BookingSourceMappingJson: , BookingRoomTypeMappingJson: , BookingRatePlanMappingJson: , LastSuccessfullIntegrationModificationEndDate: 2/15/2018 12:00:00 AM, BookingStatusBeforeCancellation: Confirmed, UseGrossRevenue: True, AdditionalSettings: {\"IsStayDayStatuses\": [\"Confirmed\"], \t\"CsvDateFormat\": \"dd/MM/yyyy\", \"EmptySegment\": \"Empty\", \"NullDate\": \"1900-01-01\"}, PerformPostIntegrationStepsRequestPior: False, LastFullySuccessfulReportDate: 2/15/2018 12:00:00 AM, StatusId: 2, DataFilter: ",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.038Z"
}, {
	"severity": 0,
	"message": "Read AdditionalSettings from PmsHotel",
	"source": "Yp.Rms.PmsIntegrator.Library.Domain.Integrations.GenericPmsHotelAdditionalSettingsRetriever`1[[Yp.Rms.Common.Protel.ProtelAdditionalSettings, Yp.Rms.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.047Z"
}, {
	"severity": 0,
	"message": "PerformAnalysis: Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.047Z"
}, {
	"severity": 2,
	"message": "Starting report data extraction... (File name: Extract_RMS_YP_DATA_6566_20180215.csv)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.048Z"
}, {
	"severity": 2,
	"message": "[Authentication Manager] Invoked with applicationId: 100, clientIpAddress: 104.40.229.28, clientAuthenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, clientApplicationId: 110",
	"source": "Yp.Common.Base.Wcf.Security.WcfSecurityManager",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.574Z"
}, {
	"severity": 0,
	"message": "Authentication succeeded. ServerApplicationId: 100, clientApplicationId 110, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, remote IP: 104.40.229.28",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.579Z"
}, {
	"severity": 2,
	"message": "Integration status requested.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.58Z"
}, {
	"severity": 2,
	"message": "Integration status being returned: Finished.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.583Z"
}, {
	"severity": 0,
	"message": "There is a total of 6401 entries in the report file.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.593Z"
}, {
	"severity": 0,
	"message": "Start filtering data (BookingDailyDataFilter)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BookingDailyDataFilter",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.616Z"
}, {
	"severity": 2,
	"message": "Integration start requested.",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.646Z"
}, {
	"severity": 2,
	"message": "[Authentication Manager] Invoked with applicationId: 100, clientIpAddress: 104.40.229.28, clientAuthenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, clientApplicationId: 110",
	"source": "Yp.Common.Base.Wcf.Security.WcfSecurityManager",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.651Z"
}, {
	"severity": 0,
	"message": "Authentication succeeded. ServerApplicationId: 100, clientApplicationId 110, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-5199c793f82f, remote IP: 104.40.229.28",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.67Z"
}, {
	"severity": 2,
	"message": "Integration start requested (inner, not WCF method).",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.671Z"
}, {
	"severity": 0,
	"message": "Calling CreateHotelIntegrator",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.688Z"
}, {
	"severity": 0,
	"message": "StartIntegration",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.688Z"
}, {
	"severity": 0,
	"message": "The hotel 6568 uses integrator class: Protel",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.IntegratorFactory",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.716Z"
}, {
	"severity": 0,
	"message": "Calling AddHistoryEntry",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.746Z"
}, {
	"severity": 0,
	"message": "Calling ActualIntegrationStart",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.837Z"
}, {
	"severity": 2,
	"message": "Integration startup result: Success",
	"source": "Yp.Rms.PmsIntegrator.Gateway.PmsIntegratorGateway",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.838Z"
}, {
	"severity": 2,
	"message": "Integration started, id: 2f0c6caa-37df-47c8-b8cb-3c29d55f5ba8",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.839Z"
}, {
	"severity": 2,
	"message": "Number of report analyzers for the integration: 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.84Z"
}, {
	"severity": 2,
	"message": "PMS settings: {\"ContinuousIntegrationMaxTimeSpan\":null,\"IgnoreBookingGroupCodesWhenStoring\":true,\"AutomaticallyStoreCommunicationHistory\":false}",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.84Z"
}, {
	"severity": 0,
	"message": "Integration Options -> HotelId: 6568, UseLastCommunicationFromDatabase: False, LastCommunicationFromDatabaseStepsBack: , IsFirstIntegraiton: False, IsAutomaticIntegration: True, IntegrationTimeOverride: , TreatAsFirstRun: False, IsContinuousIntegration: False, ReportDate: 2/16/2018 12:00:00 AM, files: Extract_RMS_YP_DATA_6568_20180215.csv,Extract_RMS_YP_PROP_6568_20180215.csv,Extract_RMS_YP_RPLAN_6568_20180215.csv,Extract_RMS_YP_RTYPE_6568_20180215.csv",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.841Z"
}, {
	"severity": 2,
	"message": "PmsHotel params: HotelId: 6568, PmsId: 24, PmsHotelCode: , HotelName: Hotel Lady's First, BookingStatusMappingJson: , BookingSegmentMappingJson: , BookingChannelMappingJson: , BookingSourceMappingJson: , BookingRoomTypeMappingJson: , BookingRatePlanMappingJson: , LastSuccessfullIntegrationModificationEndDate: 2/15/2018 12:00:00 AM, BookingStatusBeforeCancellation: Confirmed, UseGrossRevenue: True, AdditionalSettings: {\"IsStayDayStatuses\": [\"Confirmed\"], \t\"CsvDateFormat\": \"dd/MM/yyyy\", \"EmptySegment\": \"Empty\", \"NullDate\": \"1900-01-01\"}, PerformPostIntegrationStepsRequestPior: False, LastFullySuccessfulReportDate: 2/15/2018 12:00:00 AM, StatusId: 2, DataFilter: ",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.864Z"
}, {
	"severity": 0,
	"message": "PerformAnalysis: Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.874Z"
}, {
	"severity": 2,
	"message": "Starting report data extraction... (File name: Extract_RMS_YP_DATA_6568_20180215.csv)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.875Z"
}, {
	"severity": 0,
	"message": "Read AdditionalSettings from PmsHotel",
	"source": "Yp.Rms.PmsIntegrator.Library.Domain.Integrations.GenericPmsHotelAdditionalSettingsRetriever`1[[Yp.Rms.Common.Protel.ProtelAdditionalSettings, Yp.Rms.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:20.875Z"
}, {
	"severity": 0,
	"message": "Filtering: RemoveStayDatesBeforeReportDate, params: lastReportDate: 2/15/2018 12:00:00 AM",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BookingDailyDataFilter",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.14Z"
}, {
	"severity": 2,
	"message": "Segment remapping not needed.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.148Z"
}, {
	"severity": 0,
	"message": "Read DataFilter from PmsHotel",
	"source": "Yp.Rms.PmsIntegrator.Library.Domain.Integrations.PmsHotelDataFiltersRetriever",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.148Z"
}, {
	"severity": 0,
	"message": "There is a total of 3369 entries in the report file.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelReportAnalyzer",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.17Z"
}, {
	"severity": 0,
	"message": "Start filtering data (BookingDailyDataFilter)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BookingDailyDataFilter",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.188Z"
}, {
	"severity": 0,
	"message": "Filtering: RemoveStayDatesBeforeReportDate, params: lastReportDate: 2/15/2018 12:00:00 AM",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BookingDailyDataFilter",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.326Z"
}, {
	"severity": 0,
	"message": "Read DataFilter from PmsHotel",
	"source": "Yp.Rms.PmsIntegrator.Library.Domain.Integrations.PmsHotelDataFiltersRetriever",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.327Z"
}, {
	"severity": 2,
	"message": "Segment remapping not needed.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.328Z"
}, {
	"severity": 2,
	"message": "Continuing with storing daily booking data. Total number of concurrent storages (including me): 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.942Z"
}, {
	"severity": 2,
	"message": "Attempting to store daily booking data. This can be initially blocked by other integration(s).",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.942Z"
}, {
	"severity": 0,
	"message": "Joining result of report anaylzers. Count of results: 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.942Z"
}, {
	"severity": 2,
	"message": "Attempting to store daily booking data. This can be initially blocked by other integration(s).",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.952Z"
}, {
	"severity": 0,
	"message": "Joining result of report anaylzers. Count of results: 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:21.952Z"
}, {
	"severity": 0,
	"message": "Updating 'validTo' for existing booking entries for stay dates starting from 2/15/2018 12:00:00 AM (to INFINITY). New validTo: 2/15/2018 12:00:00 AM",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:22.18Z"
}, {
	"severity": 0,
	"message": "This run will NOT be treated as the first integration",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:22.379Z"
}, {
	"severity": 0,
	"message": "This integration's booking will be treated as modified bookings. (no new booking will have a history prior to the ReportDate)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:22.38Z"
}, {
	"severity": 0,
	"message": "Adding 4042 modified entries to BookingDailyData...",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:22.703Z"
}, {
	"severity": 0,
	"message": "integrationModificationTimeRange: 2016-09-07 - 2018-02-16",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.297Z"
}, {
	"severity": 2,
	"message": "Continuing with storing daily booking data. Total number of concurrent storages (including me): 1",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.297Z"
}, {
	"severity": 2,
	"message": "Current step: Additional integration actions",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.298Z"
}, {
	"severity": 2,
	"message": "Updating hotel configuration based on the existing integration data. performUndelete: False",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.HotelConfigurationUpdater",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.299Z"
}, {
	"severity": 2,
	"message": "Updating hotel config.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.299Z"
}, {
	"severity": 0,
	"message": "Updating 'validTo' for existing booking entries for stay dates starting from 2/15/2018 12:00:00 AM (to INFINITY). New validTo: 2/15/2018 12:00:00 AM",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.376Z"
}, {
	"severity": 0,
	"message": "This integration's booking will be treated as modified bookings. (no new booking will have a history prior to the ReportDate)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.59Z"
}, {
	"severity": 0,
	"message": "This run will NOT be treated as the first integration",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:23.59Z"
}, {
	"severity": 0,
	"message": "Adding 2113 modified entries to BookingDailyData...",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.03Z"
}, {
	"severity": 0,
	"message": "integrationModificationTimeRange: 2015-01-05 - 2018-02-16",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.242Z"
}, {
	"severity": 2,
	"message": "Current step: Additional integration actions",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.243Z"
}, {
	"severity": 2,
	"message": "Updating hotel configuration based on the existing integration data. performUndelete: False",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.HotelConfigurationUpdater",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.244Z"
}, {
	"severity": 2,
	"message": "Updating hotel config.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6568",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.244Z"
}, {
	"severity": 2,
	"message": "Informing PO Web about integration...",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.44Z"
}, {
	"severity": 2,
	"message": "Cache creation not requested.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": null,
	"extraField1": "hotel: 6566",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:01:24.44Z"
}, {
	"severity": 4,
	"message": "An (ignored) exception was thrown.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Protel.ProtelIntegrator",
	"exception": "System.Data.Entity.Core.EntityCommandExecutionException: An error occurred while executing the command definition. See the inner exception for details. ---> System.Data.SqlClient.SqlException: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding. ---> System.ComponentModel.Win32Exception: The wait operation timed out\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.SqlDataReader.TryConsumeMetaData()\r\n   at System.Data.SqlClient.SqlDataReader.get_MetaData()\r\n   at System.Data.SqlClient.SqlCommand.FinishExecuteReader(SqlDataReader ds, RunBehavior runBehavior, String resetOptionsString, Boolean isInternal, Boolean forDescribeParameterEncryption)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReaderTds(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, Boolean async, Int32 timeout, Task& task, Boolean asyncWrite, Boolean inRetry, SqlDataReader ds, Boolean describeParameterEncryptionRequest)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method, TaskCompletionSource`1 completion, Int32 timeout, Task& task, Boolean& usedCache, Boolean asyncWrite, Boolean inRetry)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method)\r\n   at System.Data.SqlClient.SqlCommand.ExecuteReader(CommandBehavior behavior, String method)\r\n   at System.Data.Entity.Infrastructure.Interception.InternalDispatcher`1.Dispatch[TTarget,TInterceptionContext,TResult](TTarget target, Func`3 operation, TInterceptionContext interceptionContext, Action`3 executing, Action`3 executed)\r\n   at System.Data.Entity.Infrastructure.Interception.DbCommandDispatcher.Reader(DbCommand command, DbCommandInterceptionContext interceptionContext)\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   at System.Data.Entity.Core.Objects.Internal.ObjectQueryExecutionPlan.Execute[TResultType](ObjectContext context, ObjectParameterCollection parameterValues)\r\n   at System.Data.Entity.Core.Objects.ObjectContext.ExecuteInTransaction[T](Func`1 func, IDbExecutionStrategy executionStrategy, Boolean startLocalTransaction, Boolean releaseConnectionOnSuccess)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<>c__DisplayClass7.<GetResults>b__5()\r\n   at System.Data.Entity.SqlServer.DefaultSqlExecutionStrategy.Execute[TResult](Func`1 operation)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.GetResults(Nullable`1 forMergeOption)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<System.Collections.Generic.IEnumerable<T>.GetEnumerator>b__0()\r\n   at System.Data.Entity.Internal.LazyEnumerator`1.MoveNext()\r\n   at System.Linq.Enumerable.Single[TSource](IEnumerable`1 source)\r\n   at Yp.Rms.Database.PmsSourceData.EF.Repositories.BookingDailyDataRepository.GetMaxReportDate(Int32 hotelId, DateTime reportDate) in C:\\TFS\\Rms Dev\\Database\\Yp.Db.PmsSourceData.Ef\\Repositories\\BookingDailyDataRepository.cs:line 35\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BookingDailyDataFilter.Filter(PmsHotel pmsHotel, Boolean isFirstIntegration, DateTime currentReportDate, List`1 results) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\BookingDailyDataFilter.cs:line 47\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 105\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 35",
	"extraField1": "hotel: 494",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:18:31.228Z"
}, {
	"severity": 4,
	"message": "Unexpected integration exception for hotel id 494",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": "System.Data.Entity.Core.EntityCommandExecutionException: An error occurred while executing the command definition. See the inner exception for details. ---> System.Data.SqlClient.SqlException: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding. ---> System.ComponentModel.Win32Exception: The wait operation timed out\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.SqlDataReader.TryConsumeMetaData()\r\n   at System.Data.SqlClient.SqlDataReader.get_MetaData()\r\n   at System.Data.SqlClient.SqlCommand.FinishExecuteReader(SqlDataReader ds, RunBehavior runBehavior, String resetOptionsString, Boolean isInternal, Boolean forDescribeParameterEncryption)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReaderTds(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, Boolean async, Int32 timeout, Task& task, Boolean asyncWrite, Boolean inRetry, SqlDataReader ds, Boolean describeParameterEncryptionRequest)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method, TaskCompletionSource`1 completion, Int32 timeout, Task& task, Boolean& usedCache, Boolean asyncWrite, Boolean inRetry)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method)\r\n   at System.Data.SqlClient.SqlCommand.ExecuteReader(CommandBehavior behavior, String method)\r\n   at System.Data.Entity.Infrastructure.Interception.InternalDispatcher`1.Dispatch[TTarget,TInterceptionContext,TResult](TTarget target, Func`3 operation, TInterceptionContext interceptionContext, Action`3 executing, Action`3 executed)\r\n   at System.Data.Entity.Infrastructure.Interception.DbCommandDispatcher.Reader(DbCommand command, DbCommandInterceptionContext interceptionContext)\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   at System.Data.Entity.Core.Objects.Internal.ObjectQueryExecutionPlan.Execute[TResultType](ObjectContext context, ObjectParameterCollection parameterValues)\r\n   at System.Data.Entity.Core.Objects.ObjectContext.ExecuteInTransaction[T](Func`1 func, IDbExecutionStrategy executionStrategy, Boolean startLocalTransaction, Boolean releaseConnectionOnSuccess)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<>c__DisplayClass7.<GetResults>b__5()\r\n   at System.Data.Entity.SqlServer.DefaultSqlExecutionStrategy.Execute[TResult](Func`1 operation)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.GetResults(Nullable`1 forMergeOption)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<System.Collections.Generic.IEnumerable<T>.GetEnumerator>b__0()\r\n   at System.Data.Entity.Internal.LazyEnumerator`1.MoveNext()\r\n   at System.Linq.Enumerable.Single[TSource](IEnumerable`1 source)\r\n   at Yp.Rms.Database.PmsSourceData.EF.Repositories.BookingDailyDataRepository.GetMaxReportDate(Int32 hotelId, DateTime reportDate) in C:\\TFS\\Rms Dev\\Database\\Yp.Db.PmsSourceData.Ef\\Repositories\\BookingDailyDataRepository.cs:line 35\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BookingDailyDataFilter.Filter(PmsHotel pmsHotel, Boolean isFirstIntegration, DateTime currentReportDate, List`1 results) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\BookingDailyDataFilter.cs:line 47\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 105\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 93\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.Integrate(Int32 hotelId, IntegrationOptions options, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 99\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager.ActualIntegrationStart(IPmsIntegrator integrator, Int32 hotelId, IntegrationOptions integrationOptions, Guid integrationGuid, Action`2 integrationFinishedAction) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\TasksManager\\IntegrationTasksManager.cs:line 52",
	"extraField1": "hotel: 494",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-15T23:18:31.234Z"
}, {
	"severity": 4,
	"message": "An (ignored) exception was thrown.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BrilliantReport.BrilliantReportIntegrator",
	"exception": "System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.\r\nThe statement has been terminated. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)\r\n   at System.Data.SqlClient.SqlBulkCopy.RunParser(BulkCopySimpleResultSet bulkCopyHandler)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinuedOnSuccess(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinued(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsync(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestContinuedAsync(BulkCopySimpleResultSet internalResults, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestAsync(CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalAsync(CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteRowSourceToServerAsync(Int32 columnCount, CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServer(IDataReader reader)\r\n   at EntityFramework.BulkInsert.Providers.EfSqlBulkInsertProviderWithMappedDataReader.Run[T](IEnumerable`1 entities, SqlTransaction transaction, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\EfSqlBulkInsertProviderWithMappedDataReader.cs:line 48\r\n   at EntityFramework.BulkInsert.Providers.ProviderBase`2.Run[T](IEnumerable`1 entities, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\ProviderBase.cs:line 105\r\n   at EntityFramework.BulkInsert.Extensions.BulkInsertExtension.BulkInsert[T](DbContext context, IEnumerable`1 entities, SqlBulkCopyOptions sqlBulkCopyOptions, Nullable`1 batchSize) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Extensions\\BulkInsertExtension.cs:line 96\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess.StoreDailyBookingData(Int32 hotelId, List`1 bookings, DateTime reportDate, Boolean isFirstIntegration, String statusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData, Boolean inferIntegrationType) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\DataAccess\\BookingDailyDataAccess.cs:line 332\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer.StoreRmsDailyBookingData(DailyDataSnapshot data, Boolean isFirstIntegration, String bookingStatusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\RmsDataStorer.cs:line 75\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.SaveAnalysisResult(PmsHotel pmsHotel, IntegrationOptions options, List`1 reportAnalyzerResultList, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 230\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 112\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 35\r\nClientConnectionId:b3a5b2f1-b0ab-4b62-b5e1-7a1cc86e5e14\r\nError Number:-2,State:0,Class:11",
	"extraField1": "hotel: 1819",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T05:54:25.963Z"
}, {
	"severity": 4,
	"message": "Unexpected integration exception for hotel id 1819",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": "System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.\r\nThe statement has been terminated. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)\r\n   at System.Data.SqlClient.SqlBulkCopy.RunParser(BulkCopySimpleResultSet bulkCopyHandler)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinuedOnSuccess(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinued(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsync(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestContinuedAsync(BulkCopySimpleResultSet internalResults, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestAsync(CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalAsync(CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteRowSourceToServerAsync(Int32 columnCount, CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServer(IDataReader reader)\r\n   at EntityFramework.BulkInsert.Providers.EfSqlBulkInsertProviderWithMappedDataReader.Run[T](IEnumerable`1 entities, SqlTransaction transaction, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\EfSqlBulkInsertProviderWithMappedDataReader.cs:line 48\r\n   at EntityFramework.BulkInsert.Providers.ProviderBase`2.Run[T](IEnumerable`1 entities, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\ProviderBase.cs:line 105\r\n   at EntityFramework.BulkInsert.Extensions.BulkInsertExtension.BulkInsert[T](DbContext context, IEnumerable`1 entities, SqlBulkCopyOptions sqlBulkCopyOptions, Nullable`1 batchSize) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Extensions\\BulkInsertExtension.cs:line 96\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess.StoreDailyBookingData(Int32 hotelId, List`1 bookings, DateTime reportDate, Boolean isFirstIntegration, String statusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData, Boolean inferIntegrationType) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\DataAccess\\BookingDailyDataAccess.cs:line 332\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer.StoreRmsDailyBookingData(DailyDataSnapshot data, Boolean isFirstIntegration, String bookingStatusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\RmsDataStorer.cs:line 75\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.SaveAnalysisResult(PmsHotel pmsHotel, IntegrationOptions options, List`1 reportAnalyzerResultList, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 230\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 112\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 93\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.Integrate(Int32 hotelId, IntegrationOptions options, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 99\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager.ActualIntegrationStart(IPmsIntegrator integrator, Int32 hotelId, IntegrationOptions integrationOptions, Guid integrationGuid, Action`2 integrationFinishedAction) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\TasksManager\\IntegrationTasksManager.cs:line 52\r\nClientConnectionId:b3a5b2f1-b0ab-4b62-b5e1-7a1cc86e5e14\r\nError Number:-2,State:0,Class:11",
	"extraField1": "hotel: 1819",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T05:54:25.964Z"
}, {
	"severity": 4,
	"message": "An (ignored) exception was thrown.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BrilliantReport.BrilliantReportIntegrator",
	"exception": "System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.\r\nThe statement has been terminated. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)\r\n   at System.Data.SqlClient.SqlBulkCopy.RunParser(BulkCopySimpleResultSet bulkCopyHandler)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinuedOnSuccess(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinued(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsync(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestContinuedAsync(BulkCopySimpleResultSet internalResults, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestAsync(CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalAsync(CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteRowSourceToServerAsync(Int32 columnCount, CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServer(IDataReader reader)\r\n   at EntityFramework.BulkInsert.Providers.EfSqlBulkInsertProviderWithMappedDataReader.Run[T](IEnumerable`1 entities, SqlTransaction transaction, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\EfSqlBulkInsertProviderWithMappedDataReader.cs:line 48\r\n   at EntityFramework.BulkInsert.Providers.ProviderBase`2.Run[T](IEnumerable`1 entities, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\ProviderBase.cs:line 105\r\n   at EntityFramework.BulkInsert.Extensions.BulkInsertExtension.BulkInsert[T](DbContext context, IEnumerable`1 entities, SqlBulkCopyOptions sqlBulkCopyOptions, Nullable`1 batchSize) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Extensions\\BulkInsertExtension.cs:line 96\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess.StoreDailyBookingData(Int32 hotelId, List`1 bookings, DateTime reportDate, Boolean isFirstIntegration, String statusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData, Boolean inferIntegrationType) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\DataAccess\\BookingDailyDataAccess.cs:line 332\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer.StoreRmsDailyBookingData(DailyDataSnapshot data, Boolean isFirstIntegration, String bookingStatusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\RmsDataStorer.cs:line 75\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.SaveAnalysisResult(PmsHotel pmsHotel, IntegrationOptions options, List`1 reportAnalyzerResultList, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 230\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 112\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 35\r\nClientConnectionId:38afbe06-1a87-4105-af33-feddd53fa845\r\nError Number:-2,State:0,Class:11",
	"extraField1": "hotel: 1820",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:02:39.272Z"
}, {
	"severity": 4,
	"message": "Unexpected integration exception for hotel id 1820",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": "System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.\r\nThe statement has been terminated. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)\r\n   at System.Data.SqlClient.SqlBulkCopy.RunParser(BulkCopySimpleResultSet bulkCopyHandler)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinuedOnSuccess(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinued(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsync(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestContinuedAsync(BulkCopySimpleResultSet internalResults, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestAsync(CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalAsync(CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteRowSourceToServerAsync(Int32 columnCount, CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServer(IDataReader reader)\r\n   at EntityFramework.BulkInsert.Providers.EfSqlBulkInsertProviderWithMappedDataReader.Run[T](IEnumerable`1 entities, SqlTransaction transaction, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\EfSqlBulkInsertProviderWithMappedDataReader.cs:line 48\r\n   at EntityFramework.BulkInsert.Providers.ProviderBase`2.Run[T](IEnumerable`1 entities, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\ProviderBase.cs:line 105\r\n   at EntityFramework.BulkInsert.Extensions.BulkInsertExtension.BulkInsert[T](DbContext context, IEnumerable`1 entities, SqlBulkCopyOptions sqlBulkCopyOptions, Nullable`1 batchSize) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Extensions\\BulkInsertExtension.cs:line 96\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess.StoreDailyBookingData(Int32 hotelId, List`1 bookings, DateTime reportDate, Boolean isFirstIntegration, String statusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData, Boolean inferIntegrationType) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\DataAccess\\BookingDailyDataAccess.cs:line 332\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer.StoreRmsDailyBookingData(DailyDataSnapshot data, Boolean isFirstIntegration, String bookingStatusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\RmsDataStorer.cs:line 75\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.SaveAnalysisResult(PmsHotel pmsHotel, IntegrationOptions options, List`1 reportAnalyzerResultList, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 230\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 112\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 93\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.Integrate(Int32 hotelId, IntegrationOptions options, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 99\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager.ActualIntegrationStart(IPmsIntegrator integrator, Int32 hotelId, IntegrationOptions integrationOptions, Guid integrationGuid, Action`2 integrationFinishedAction) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\TasksManager\\IntegrationTasksManager.cs:line 52\r\nClientConnectionId:38afbe06-1a87-4105-af33-feddd53fa845\r\nError Number:-2,State:0,Class:11",
	"extraField1": "hotel: 1820",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:02:39.273Z"
}, {
	"severity": 4,
	"message": "An (ignored) exception was thrown.",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BrilliantReport.BrilliantReportIntegrator",
	"exception": "System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.\r\nThe statement has been terminated. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)\r\n   at System.Data.SqlClient.SqlBulkCopy.RunParser(BulkCopySimpleResultSet bulkCopyHandler)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinuedOnSuccess(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinued(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsync(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestContinuedAsync(BulkCopySimpleResultSet internalResults, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestAsync(CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalAsync(CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteRowSourceToServerAsync(Int32 columnCount, CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServer(IDataReader reader)\r\n   at EntityFramework.BulkInsert.Providers.EfSqlBulkInsertProviderWithMappedDataReader.Run[T](IEnumerable`1 entities, SqlTransaction transaction, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\EfSqlBulkInsertProviderWithMappedDataReader.cs:line 48\r\n   at EntityFramework.BulkInsert.Providers.ProviderBase`2.Run[T](IEnumerable`1 entities, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\ProviderBase.cs:line 105\r\n   at EntityFramework.BulkInsert.Extensions.BulkInsertExtension.BulkInsert[T](DbContext context, IEnumerable`1 entities, SqlBulkCopyOptions sqlBulkCopyOptions, Nullable`1 batchSize) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Extensions\\BulkInsertExtension.cs:line 96\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess.StoreDailyBookingData(Int32 hotelId, List`1 bookings, DateTime reportDate, Boolean isFirstIntegration, String statusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData, Boolean inferIntegrationType) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\DataAccess\\BookingDailyDataAccess.cs:line 332\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer.StoreRmsDailyBookingData(DailyDataSnapshot data, Boolean isFirstIntegration, String bookingStatusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\RmsDataStorer.cs:line 75\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.SaveAnalysisResult(PmsHotel pmsHotel, IntegrationOptions options, List`1 reportAnalyzerResultList, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 230\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 112\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 35\r\nClientConnectionId:38afbe06-1a87-4105-af33-feddd53fa845\r\nError Number:-2,State:0,Class:11",
	"extraField1": "hotel: 4",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:07:35.063Z"
}, {
	"severity": 4,
	"message": "Unexpected integration exception for hotel id 4",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": "System.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.\r\nThe statement has been terminated. ---> System.ComponentModel.Win32Exception (0x80004005): The wait operation timed out\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)\r\n   at System.Data.SqlClient.SqlBulkCopy.RunParser(BulkCopySimpleResultSet bulkCopyHandler)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinuedOnSuccess(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsyncContinued(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.CopyBatchesAsync(BulkCopySimpleResultSet internalResults, String updateBulkCommandText, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestContinuedAsync(BulkCopySimpleResultSet internalResults, CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalRestAsync(CancellationToken cts, TaskCompletionSource`1 source)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServerInternalAsync(CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteRowSourceToServerAsync(Int32 columnCount, CancellationToken ctoken)\r\n   at System.Data.SqlClient.SqlBulkCopy.WriteToServer(IDataReader reader)\r\n   at EntityFramework.BulkInsert.Providers.EfSqlBulkInsertProviderWithMappedDataReader.Run[T](IEnumerable`1 entities, SqlTransaction transaction, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\EfSqlBulkInsertProviderWithMappedDataReader.cs:line 48\r\n   at EntityFramework.BulkInsert.Providers.ProviderBase`2.Run[T](IEnumerable`1 entities, BulkInsertOptions options) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Providers\\ProviderBase.cs:line 105\r\n   at EntityFramework.BulkInsert.Extensions.BulkInsertExtension.BulkInsert[T](DbContext context, IEnumerable`1 entities, SqlBulkCopyOptions sqlBulkCopyOptions, Nullable`1 batchSize) in c:\\dev\\EntityFramework.BulkInsert\\dev\\Src\\EntityFramework.BulkInsert\\Extensions\\BulkInsertExtension.cs:line 96\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.DataAccess.BookingDailyDataAccess.StoreDailyBookingData(Int32 hotelId, List`1 bookings, DateTime reportDate, Boolean isFirstIntegration, String statusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData, Boolean inferIntegrationType) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\DataAccess\\BookingDailyDataAccess.cs:line 332\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.RmsDataStorer.StoreRmsDailyBookingData(DailyDataSnapshot data, Boolean isFirstIntegration, String bookingStatusBeforeCancellation, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\RmsDataStorer.cs:line 75\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.SaveAnalysisResult(PmsHotel pmsHotel, IntegrationOptions options, List`1 reportAnalyzerResultList, Boolean fixFirstIntegrationAggregatedData) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 230\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericReportIntegrator.InitialSteps(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericReportIntegrator.cs:line 112\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.IntegrationWork(Int32 hotelId, IntegrationOptions options, Int32 integrationsCount, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 131\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.<>c__DisplayClass15_1.<Integrate>b__0(GenericIntegrator integrator) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 100\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.Utilities.CallRetryOnExceptionWithLogging[TActionResult,TArgument](TArgument instance, Func`2 methodToCall, Int32 hotelId, ILogger logger, Int32 retryCount, Boolean logCallingMethodName) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\Utilities.cs:line 93\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.Integrate(Int32 hotelId, IntegrationOptions options, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 99\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager.ActualIntegrationStart(IPmsIntegrator integrator, Int32 hotelId, IntegrationOptions integrationOptions, Guid integrationGuid, Action`2 integrationFinishedAction) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\TasksManager\\IntegrationTasksManager.cs:line 52\r\nClientConnectionId:38afbe06-1a87-4105-af33-feddd53fa845\r\nError Number:-2,State:0,Class:11",
	"extraField1": "hotel: 4",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:07:35.067Z"
}, {
	"severity": 4,
	"message": "Additional integration actions has failed: Integration step failed. (Exception: An error occurred while executing the command definition. See the inner exception for details.)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BrilliantReport.BrilliantReportIntegrator",
	"exception": "System.Data.Entity.Core.EntityCommandExecutionException: An error occurred while executing the command definition. See the inner exception for details. ---> System.Data.SqlClient.SqlException: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding. ---> System.ComponentModel.Win32Exception: The wait operation timed out\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.SqlDataReader.TryConsumeMetaData()\r\n   at System.Data.SqlClient.SqlDataReader.get_MetaData()\r\n   at System.Data.SqlClient.SqlCommand.FinishExecuteReader(SqlDataReader ds, RunBehavior runBehavior, String resetOptionsString, Boolean isInternal, Boolean forDescribeParameterEncryption)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReaderTds(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, Boolean async, Int32 timeout, Task& task, Boolean asyncWrite, Boolean inRetry, SqlDataReader ds, Boolean describeParameterEncryptionRequest)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method, TaskCompletionSource`1 completion, Int32 timeout, Task& task, Boolean& usedCache, Boolean asyncWrite, Boolean inRetry)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method)\r\n   at System.Data.SqlClient.SqlCommand.ExecuteReader(CommandBehavior behavior, String method)\r\n   at System.Data.Entity.Infrastructure.Interception.InternalDispatcher`1.Dispatch[TTarget,TInterceptionContext,TResult](TTarget target, Func`3 operation, TInterceptionContext interceptionContext, Action`3 executing, Action`3 executed)\r\n   at System.Data.Entity.Infrastructure.Interception.DbCommandDispatcher.Reader(DbCommand command, DbCommandInterceptionContext interceptionContext)\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   at System.Data.Entity.Core.Objects.Internal.ObjectQueryExecutionPlan.Execute[TResultType](ObjectContext context, ObjectParameterCollection parameterValues)\r\n   at System.Data.Entity.Core.Objects.ObjectContext.ExecuteInTransaction[T](Func`1 func, IDbExecutionStrategy executionStrategy, Boolean startLocalTransaction, Boolean releaseConnectionOnSuccess)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<>c__DisplayClass7.<GetResults>b__5()\r\n   at System.Data.Entity.SqlServer.DefaultSqlExecutionStrategy.Execute[TResult](Func`1 operation)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.GetResults(Nullable`1 forMergeOption)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<System.Collections.Generic.IEnumerable<T>.GetEnumerator>b__0()\r\n   at System.Data.Entity.Internal.LazyEnumerator`1.MoveNext()\r\n   at System.Linq.Enumerable.Single[TSource](IEnumerable`1 source)\r\n   at PriceOptimizerYieldPlanetPO.EF.Repositories.CachedOccupancyCalculationsHistoryRepository.CheckIfForecastFullRecalculationNeeded(Int32 hotelId, Nullable`1 lastIntegrationDate) in C:\\TFS\\Rms Dev\\Database\\Yp.Db.PriceOptimizer.Ef\\Repositories\\CachedOccupancyCalculationsHistoryRepository.cs:line 25\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.PostIntegration.PostIntegrationStepsExecutor.UpdateSparkForecast(Int32 hotelId, Guid integrationId, DateTime reportDate) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\PostIntegration\\PostIntegrationStepsExecutor.cs:line 85\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.AdditionalIntegrationActions(Int32 hotelId, IntegrationOptions options, DateTimeRange integrationModificationTimeRange, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 223",
	"extraField1": "hotel: 4",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:48:01.982Z"
}, {
	"severity": 4,
	"message": "Additional integration actions have failed.,Integration step failed. (Exception: An error occurred while executing the command definition. See the inner exception for details.)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.BrilliantReport.BrilliantReportIntegrator",
	"exception": null,
	"extraField1": "hotel: 4",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:48:02.033Z"
}, {
	"severity": 4,
	"message": "ERROR: Integration 4 finished with errors: Additional integration actions have failed.,Integration step failed. (Exception: An error occurred while executing the command definition. See the inner exception for details.)",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 4",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:48:02.041Z"
}, {
	"severity": 4,
	"message": "Result exception 0: System.Data.Entity.Core.EntityCommandExecutionException: An error occurred while executing the command definition. See the inner exception for details. ---> System.Data.SqlClient.SqlException: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding. ---> System.ComponentModel.Win32Exception: The wait operation timed out\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)\r\n   at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)\r\n   at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)\r\n   at System.Data.SqlClient.SqlDataReader.TryConsumeMetaData()\r\n   at System.Data.SqlClient.SqlDataReader.get_MetaData()\r\n   at System.Data.SqlClient.SqlCommand.FinishExecuteReader(SqlDataReader ds, RunBehavior runBehavior, String resetOptionsString, Boolean isInternal, Boolean forDescribeParameterEncryption)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReaderTds(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, Boolean async, Int32 timeout, Task& task, Boolean asyncWrite, Boolean inRetry, SqlDataReader ds, Boolean describeParameterEncryptionRequest)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method, TaskCompletionSource`1 completion, Int32 timeout, Task& task, Boolean& usedCache, Boolean asyncWrite, Boolean inRetry)\r\n   at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method)\r\n   at System.Data.SqlClient.SqlCommand.ExecuteReader(CommandBehavior behavior, String method)\r\n   at System.Data.Entity.Infrastructure.Interception.InternalDispatcher`1.Dispatch[TTarget,TInterceptionContext,TResult](TTarget target, Func`3 operation, TInterceptionContext interceptionContext, Action`3 executing, Action`3 executed)\r\n   at System.Data.Entity.Infrastructure.Interception.DbCommandDispatcher.Reader(DbCommand command, DbCommandInterceptionContext interceptionContext)\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   --- End of inner exception stack trace ---\r\n   at System.Data.Entity.Core.EntityClient.Internal.EntityCommandDefinition.ExecuteStoreCommands(EntityCommand entityCommand, CommandBehavior behavior)\r\n   at System.Data.Entity.Core.Objects.Internal.ObjectQueryExecutionPlan.Execute[TResultType](ObjectContext context, ObjectParameterCollection parameterValues)\r\n   at System.Data.Entity.Core.Objects.ObjectContext.ExecuteInTransaction[T](Func`1 func, IDbExecutionStrategy executionStrategy, Boolean startLocalTransaction, Boolean releaseConnectionOnSuccess)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<>c__DisplayClass7.<GetResults>b__5()\r\n   at System.Data.Entity.SqlServer.DefaultSqlExecutionStrategy.Execute[TResult](Func`1 operation)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.GetResults(Nullable`1 forMergeOption)\r\n   at System.Data.Entity.Core.Objects.ObjectQuery`1.<System.Collections.Generic.IEnumerable<T>.GetEnumerator>b__0()\r\n   at System.Data.Entity.Internal.LazyEnumerator`1.MoveNext()\r\n   at System.Linq.Enumerable.Single[TSource](IEnumerable`1 source)\r\n   at PriceOptimizerYieldPlanetPO.EF.Repositories.CachedOccupancyCalculationsHistoryRepository.CheckIfForecastFullRecalculationNeeded(Int32 hotelId, Nullable`1 lastIntegrationDate) in C:\\TFS\\Rms Dev\\Database\\Yp.Db.PriceOptimizer.Ef\\Repositories\\CachedOccupancyCalculationsHistoryRepository.cs:line 25\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.PostIntegration.PostIntegrationStepsExecutor.UpdateSparkForecast(Int32 hotelId, Guid integrationId, DateTime reportDate) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\PostIntegration\\PostIntegrationStepsExecutor.cs:line 85\r\n   at Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.GenericIntegrator.AdditionalIntegrationActions(Int32 hotelId, IntegrationOptions options, DateTimeRange integrationModificationTimeRange, Guid integrationGuid) in C:\\TFS\\Rms Dev\\Rms\\Yp.Rms.PmsIntegrator.Library.Infrastructure\\Integrations\\GenericIntegrator.cs:line 223",
	"source": "Yp.Rms.PmsIntegrator.Library.Infrastructure.Integrations.TasksManager.IntegrationTasksManager",
	"exception": null,
	"extraField1": "hotel: 4",
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T06:48:02.042Z"
}, {
	"severity": 4,
	"message": "Can't authenticate. ServerApplicationId: 100, clientApplicationId 200, authenticationKey: XXXXXXXX-XXXX-XXXX-XXXX-1e9a5899cefe, remote IP: 10.1.2.101",
	"source": "Yp.Common.Base.Wcf.Security.SimpleAuthenticator",
	"exception": null,
	"extraField1": null,
	"extraField2": null,
	"extraField3": null,
	"extraField4": null,
	"creationDateUtc": "2018-02-16T08:14:14.374Z"
}];
