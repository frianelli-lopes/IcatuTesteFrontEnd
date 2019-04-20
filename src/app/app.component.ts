import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "IcatuTesteFrontEnd";

  constructor(private authService: AuthService, private router: Router) {}

  estaLogado() {
    return this.authService.estaLogado();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
