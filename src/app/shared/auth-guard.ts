import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) {
  }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["login"]);
    }
    return true;
  }
}
