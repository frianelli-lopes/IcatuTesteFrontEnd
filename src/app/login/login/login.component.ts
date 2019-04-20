import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ILogin } from "src/app/models/login.model";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.logout();

    this.form = this.fb.group({
      usuario: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  hasError(campo: string) {
    return this.form.get(campo).errors;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      let credenciais: ILogin = { ...this.form.value };

      this.authService.login(credenciais).subscribe(success => {
        console.log(success);
        this.router.navigate(["/clientes/lista"]);
      });
    }
  }
}
