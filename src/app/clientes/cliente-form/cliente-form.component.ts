import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { DATE_REGEX } from "src/app/utils/constantes";
import { dateValidator } from "src/app/validators/date.validator";
import { ClientesService } from "src/app/services/clientes.service";
import { ICliente } from "../../models/cliente.model";

@Component({
  selector: "app-cliente-form",
  templateUrl: "./cliente-form.component.html",
  styleUrls: ["./cliente-form.component.css"]
})
export class ClienteFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  cliente: ICliente = { nome: "", sexo: "M", dataNascimento: "" };

  constructor(
    private fb: FormBuilder,
    private clienteService: ClientesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    //Formato para observables aninhados
    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap((id: number) => {
          if (!id) return of(null);
          return this.clienteService.recuperarPorId(id);
        }) //switchMap recebe o retorno do map
      )
      .subscribe(curso => {
        if (curso) this.updateForm(curso);
      }); //Este subscribe receberá o retorno do switchMap

    this.form = this.fb.group({
      id: [this.cliente.id],
      nome: [
        this.cliente.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      sexo: [this.cliente.sexo],
      cpf: [
        this.cliente.cpf,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ],
      dataNascimento: [
        this.cliente.dataNascimento,
        [Validators.required, Validators.pattern(DATE_REGEX)]
      ]
    });
  }

  updateForm(cliente: ICliente) {
    this.form.patchValue({ ...cliente });
  }

  hasError(campo: string) {
    return this.form.get(campo).errors;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      var cliente: ICliente = { ...this.form.value };

      console.log("cliente: " + cliente);

      if (this.form.value.id) {
        this.clienteService
          .alterar(cliente)
          .subscribe(
            success => this.location.back(),
            error => console.error(error)
          );
      } else {
        this.clienteService
          .incluir(cliente)
          .subscribe(
            success => this.location.back(),
            error => console.error(error)
          );
      }

      let msgSuccess = "Curso criado com sucesso!";
      let msgError = "Erro ao criar curso, tente novamente!";
      if (this.form.value.id) {
        msgSuccess = "Curso atualizado com sucesso!";
        msgError = "Erro ao atualizar curso, tente novamente!";
      }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
