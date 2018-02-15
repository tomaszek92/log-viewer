import { LogsOrder } from "./LogsOrder";
import { Severity } from "./Severity";

export interface ILogsRequestDto {
  serverId: number;
  applicationId: number;
  extraField1: string;
  extraField2: string;
  extraField3: string;
  extraField4: string;
  dateFrom: Date;
  dateTo: Date;
  maxLogs: number;
  severity: Severity;
  logsOrder: LogsOrder;
  includeGeneralLogs: boolean;
}
