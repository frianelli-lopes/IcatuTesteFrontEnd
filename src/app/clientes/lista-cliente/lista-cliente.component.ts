import { Component, OnInit } from "@angular/core";
import { ICliente } from "src/app/models/cliente.model";
import { ClientesService } from "src/app/services/clientes.service";

@Component({
  selector: "app-lista-cliente",
  templateUrl: "./lista-cliente.component.html",
  styleUrls: ["./lista-cliente.component.css"]
})
export class ListaClienteComponent implements OnInit {
  clientes: ICliente[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService
      .listar()
      .pipe()
      .subscribe(x => (this.clientes = x));
  }
}
