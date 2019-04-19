import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ListaClienteComponent } from "./clientes/lista-cliente/lista-cliente.component";
import { ClienteFormComponent } from "./clientes/cliente-form/cliente-form.component";

const routes: Routes = [
  {
    path: "clientes",
    component: ClientesComponent,
    children: [
      { path: "", redirectTo: "lista", pathMatch: "full" },
      { path: "lista", component: ListaClienteComponent },
      { path: "novo", component: ClienteFormComponent },
      { path: "editar/:id", component: ClienteFormComponent }
    ]
  },
  { path: "sobre", component: SobreComponent },
  { path: "", redirectTo: "/clientes", pathMatch: "full" },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
