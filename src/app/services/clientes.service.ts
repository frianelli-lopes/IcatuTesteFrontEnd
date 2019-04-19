import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ICliente } from "../models/cliente.model";
import { ErrorHandler } from "../app.error-handler";

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  clientes: ICliente[] = [
    {
      id: 1,
      nome: "Flavio Rianelli",
      dataNascimento: "1976-10-15",
      sexo: "M",
      enderecoCadastrado: true
    },
    {
      id: 2,
      nome: "Ana Paula",
      dataNascimento: "1982-01-06",
      sexo: "F",
      enderecoCadastrado: false
    },
    {
      id: 3,
      nome: "Larissa",
      dataNascimento: "1999-04-29",
      sexo: "F",
      enderecoCadastrado: true
    },
    {
      id: 4,
      nome: "Gustavo",
      dataNascimento: "2002-05-11",
      sexo: "M",
      enderecoCadastrado: true
    }
  ];

  _API: string = "http://localhost:3000";

  constructor(private http: Http) {}

  getClientes(): Observable<ICliente[]> {
    return this.http.get(`${this._API}/clientes`).pipe(
      map(response => response.json()),
      catchError(ErrorHandler.handleError)
    );
  }
}
