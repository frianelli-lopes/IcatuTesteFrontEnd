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

  hoje = new Date();

  constructor(private router: Router) {}

  ngOnInit() {}

  onEditar(id: number) {
    this.router.navigate(["clientes/editar", id]);
  }

  onExcluir(id: number) {
    this.excluir.emit(id);
  }

  calcularIdade() {
    if (this.cliente && this.cliente.dataNascimento != "") {
      let data = this.cliente.dataNascimento.split("/");
      let dia = parseInt(data[0], 10);
      let mes = parseInt(data[1], 10) - 1;
      let ano = parseInt(data[2], 10);
      let idade = this.hoje.getFullYear() - ano;

      if (this.hoje.getMonth() < mes) return idade - 1;

      if (this.hoje.getMonth() == mes && this.hoje.getDate() < dia)
        return idade - 1;

      return idade;
    }

    return null;
  }
}
