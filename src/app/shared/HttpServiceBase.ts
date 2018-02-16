import { Observable } from "rxjs/Rx";

export class HttpServiceBase {
  handleError(error: Response) {
    return Observable.throw(error);
  }
}
