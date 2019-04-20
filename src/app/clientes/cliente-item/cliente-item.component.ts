import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { ICliente } from "src/app/models/cliente.model";

@Component({
  selector: "app-cliente-item",
  templateUrl: "./cliente-item.component.html",
  styleUrls: ["./cliente-item.component.css"]
})
export class ClienteItemComponent implements OnInit {
  @Input() cliente: ICliente;

  @Output() excluir = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  onEditar(id: number) {
    this.router.navigate(["clientes/editar", id]);
  }

  onExcluir(id: number) {
    this.excluir.emit(id);
  }
}
