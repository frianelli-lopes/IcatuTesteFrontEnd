import { Component, OnInit } from "@angular/core";
import { ICliente } from "../models/cliente.model";

@Component({
  selector: "app-lista-cliente",
  templateUrl: "./lista-cliente.component.html",
  styleUrls: ["./lista-cliente.component.css"]
})
export class ListaClienteComponent implements OnInit {
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
    }
  ];

  constructor() {}

  ngOnInit() {}
}
