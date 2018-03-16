import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class PacManLoaderService {
  private ajaxCalls: number;
  ajaxCallsObservable: BehaviorSubject<number>;

  constructor() {
    this.ajaxCalls = 0;
    this.ajaxCallsObservable = new BehaviorSubject(this.ajaxCalls);
  }

  start(): void {
    this.ajaxCallsObservable.next(++this.ajaxCalls);
  }

  end(): void {
    this.ajaxCallsObservable.next(--this.ajaxCalls);
  }
}
