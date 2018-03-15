import { Component } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { IUserDto } from "../shared/IUserDto";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  user: IUserDto;
  authorizationErrorMsg: string;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) {
      this.user = {
        email: "",
        password: ""
      };
  }

  login() {
    const data = this.authService.login(this.user)
      .catch(error => {
        this.authorizationErrorMsg = error.error.error_description;
        return Observable.throw(error);
      })
      .subscribe(response => {
        this.authService.setToken(response.access_token, response[".expires"]);
        this.authorizationErrorMsg = undefined;
        this.router.navigate(["viewLogs"])
      });
  }
}
