import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ListaClienteComponent } from "./clientes/lista-cliente/lista-cliente.component";
import { ClienteFormComponent } from "./clientes/cliente-form/cliente-form.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "clientes",
    component: ClientesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "lista", pathMatch: "full" },
      { path: "lista", component: ListaClienteComponent },
      { path: "novo", component: ClienteFormComponent },
      { path: "editar/:id", component: ClienteFormComponent }
    ]
  },
  { path: "sobre", component: SobreComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
