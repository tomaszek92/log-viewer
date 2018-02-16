import { Severity } from "./Severity";

export interface ILogEntryDto {
  severity: Severity;
  message: string;
  source: string;
  exception: string;
  extraField1: string;
  extraField2: string;
  extraField3: string;
  extraField4: string;
  creationDateUtc: Date;
}
