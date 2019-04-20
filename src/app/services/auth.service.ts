import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take, tap } from "rxjs/operators";

import { ILogin } from "../models/login.model";
import { API } from "../utils/constantes";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  _API: string = API;

  constructor(private http: HttpClient, private router: Router) {}

  login(credenciais: ILogin) {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${this._API}/login`, credenciais, httpOptions).pipe(
      tap(res => {
        let token = (<any>res).token;
        localStorage.setItem("jwt", token);

        return of<boolean>(true);
      })
    );
  }

  estaLogado() {
    let token = localStorage.getItem("jwt");

    return token && token !== "";
  }

  logout() {
    localStorage.removeItem("jwt");
  }
}
