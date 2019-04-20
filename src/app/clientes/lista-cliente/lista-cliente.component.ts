import { Component, OnInit, Output } from "@angular/core";
import { ICliente } from "src/app/models/cliente.model";
import { ClientesService } from "src/app/services/clientes.service";
import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";

@Component({
  selector: "app-lista-cliente",
  templateUrl: "./lista-cliente.component.html",
  styleUrls: ["./lista-cliente.component.css"]
})
export class ListaClienteComponent implements OnInit {
  clientes: ICliente[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.clientesService
      .listar()
      .pipe()
      .subscribe(
        x => {
          this.clientes = x;
        },
        error => {
          console.log(error);
        }
      );
  }

  onExcluir(evento) {
    this.clientesService.excluir(evento).subscribe(success => this.listar());
  }
}
