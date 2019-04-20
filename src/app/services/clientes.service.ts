import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError, take } from "rxjs/operators";

import { ICliente } from "../models/cliente.model";
import { ErrorHandler } from "../app.error-handler";

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  clientes: ICliente[] = [];

  _API: string = "http://localhost:3000";

  constructor(private http: Http) {}

  listar(): Observable<ICliente[]> {
    return this.http.get(`${this._API}/clientes`).pipe(
      map(response => response.json()),
      catchError(ErrorHandler.handleError)
    );
  }

  recuperarPorId(id: number): Observable<ICliente> {
    return this.http.get(`${this._API}/clientes/${id}`).pipe(
      map(response => response.json()),
      catchError(ErrorHandler.handleError),
      take(1)
    );
  }

  incluir(cliente: ICliente) {
    return this.http.post(`${this._API}/clientes`, cliente).pipe(take(1));
  }

  alterar(cliente: ICliente) {
    return this.http
      .put(`${this._API}/clientes/${cliente.id}`, cliente)
      .pipe(take(1));
  }

  excluir(id: number) {
    return this.http.delete(`${this._API}/clientes/${id}`).pipe(take(1));
  }
}
