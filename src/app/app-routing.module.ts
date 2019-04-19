import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
  { path: "clientes", component: ClientesComponent },
  { path: "sobre", component: SobreComponent },
  { path: "", redirectTo: "/clientes", pathMatch: "full" },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
