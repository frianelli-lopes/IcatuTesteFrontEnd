import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteItemComponent } from "./clientes/cliente-item/cliente-item.component";
import { SobreComponent } from "./sobre/sobre.component";
import { HttpModule } from "@angular/http";
import { ListaClienteComponent } from "./clientes/lista-cliente/lista-cliente.component";
import { ClienteFormComponent } from "./clientes/cliente-form/cliente-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login/login.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    ClientesComponent,
    ClienteItemComponent,
    SobreComponent,
    ListaClienteComponent,
    ClienteFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
