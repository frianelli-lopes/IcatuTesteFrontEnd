import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListaClienteComponent } from "./lista-cliente/lista-cliente.component";
import { ListaEnderecoComponent } from "./lista-endereco/lista-endereco.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const routes: Routes = [
  { path: "lista-cliente", component: ListaClienteComponent },
  { path: "lista-endereco", component: ListaEnderecoComponent },
  { path: "", redirectTo: "/lista-cliente", pathMatch: "full" },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
