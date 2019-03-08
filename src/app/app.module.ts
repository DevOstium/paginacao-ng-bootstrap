import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoModule } from './pages/alunos/aluno.module';
import { DataTableModule } from './shared/componentes/data-table/data-table.module';
import { CompleteModule } from './shared/componentes/complete/complete.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoModule,
    DataTableModule,
    CompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
