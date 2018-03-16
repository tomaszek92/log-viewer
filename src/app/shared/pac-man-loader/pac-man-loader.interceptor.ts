import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PacManLoaderService } from "./pac-man-loader.service";

@Injectable()
export class PacManLoaderInterceptor implements HttpInterceptor {

  constructor(private readonly pacManLoaderService: PacManLoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pacManLoaderService.start();
    return next
      .handle(req)     
      .finally(() => {        
        this.pacManLoaderService.end();
      });
  }
}
