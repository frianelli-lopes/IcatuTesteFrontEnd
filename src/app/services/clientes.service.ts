import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError, take, tap } from "rxjs/operators";

import { ICliente } from "../models/cliente.model";
import { ErrorHandler } from "../app.error-handler";
import { API } from "../utils/constantes";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  clientes: ICliente[] = [];

  _API: string = API;

  constructor(private httpClient: HttpClient, private http: Http) {}

  private incluirHeadersAutenticacao() {
    let token = localStorage.getItem("jwt");

    return {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    };
  }

  listar(): Observable<ICliente[]> {
    return this.httpClient
      .get<ICliente[]>(
        `${this._API}/clientes`,
        this.incluirHeadersAutenticacao()
      )
      .pipe(
        map(response => response),
        catchError(ErrorHandler.handleError)
      );
  }

  recuperarPorId(id: number): Observable<ICliente> {
    return this.httpClient
      .get<ICliente>(
        `${this._API}/clientes/${id}`,
        this.incluirHeadersAutenticacao()
      )
      .pipe(
        map(response => response),
        catchError(ErrorHandler.handleError),
        take(1)
      );
  }

  incluir(cliente: ICliente) {
    cliente.id = 0;

    return this.httpClient
      .post(`${this._API}/clientes`, cliente, this.incluirHeadersAutenticacao())
      .pipe(take(1));
  }

  alterar(cliente: ICliente) {
    return this.httpClient
      .put(
        `${this._API}/clientes/${cliente.id}`,
        cliente,
        this.incluirHeadersAutenticacao()
      )
      .pipe(take(1));
  }

  excluir(id: number) {
    return this.httpClient
      .delete(`${this._API}/clientes/${id}`, this.incluirHeadersAutenticacao())
      .pipe(take(1));
  }
}
