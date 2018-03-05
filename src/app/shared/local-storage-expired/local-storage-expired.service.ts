import * as moment from "moment";
import { Injectable } from "@angular/core";
import { ILocalStorageExpiredItem } from "./ILocalStorageExpiredItem";

@Injectable()
export class LocalStorageExpiredService {
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    const data: ILocalStorageExpiredItem = JSON.parse(item);
    if (!data) {
      return undefined;
    }
    if (data.expires) {
      if (moment().isAfter(moment(data.expires))) {
        localStorage.removeItem(key);
        return undefined;
      }
    }
    return data.value;
  }

  setItem(key: string, data: any, expires?: Date): void {
    const obj: ILocalStorageExpiredItem = {
      value: data
    };
    if (expires) {
      obj.expires = expires;
    }

    localStorage.setItem(key, JSON.stringify(obj));
  }
}
