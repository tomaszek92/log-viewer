import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { ILogEntryDto } from "./ILogEntryDto";

@Injectable()
export class LogsService {
  getLogs(): Observable<ILogEntryDto[]> {
    const subject = new Subject<ILogEntryDto[]>();
    setTimeout(() => {
      subject.next(_logs);
      subject.complete();
    }, 1000);
    return subject.asObservable();
  }
}

const _logs: ILogEntryDto[] = [];
