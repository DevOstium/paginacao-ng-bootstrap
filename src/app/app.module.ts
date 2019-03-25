import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableModule } from './shared/componentes/data-table/data-table.module';
import { CompleteModule } from './shared/componentes/complete/complete.module';
import { UsuarioModule } from './pages/usuarios/usuario.module';
import { UsuarioADModule } from './pages/usuarios/usuarioADs/usuarioAD.module';
import { TypeaheadModule } from './pages/typeahead/typeahead.module';
import { ProdutoModule } from './pages/produtos/produto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    CompleteModule,
    UsuarioModule,
    UsuarioADModule,
    TypeaheadModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
