import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteItemComponent } from "./clientes/cliente-item/cliente-item.component";
import { SobreComponent } from "./sobre/sobre.component";

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    ClientesComponent,
    ClienteItemComponent,
    SobreComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
