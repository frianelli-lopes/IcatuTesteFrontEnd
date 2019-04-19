import { Component, OnInit } from "@angular/core";
import { ICliente } from "../models/cliente.model";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
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
