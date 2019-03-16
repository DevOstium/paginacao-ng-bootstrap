import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './pages/alunos/aluno.controller';
import { DataTableComponent } from './shared/componentes/data-table/data-table.component';
import { NgbdTableComplete } from './shared/componentes/complete/table-complete';
import { UsuarioController } from './pages/usuarios/usuario/usuario.controller';
import { UsuarioADController } from './pages/usuarios/usuarioADs/usuarioAD/usuarioAD.controller';
import { TypeaheadComponent } from './pages/typeahead/components/typeahead.component';

const routes: Routes = [

    { path        : '', pathMatch   : 'full',  redirectTo  : 'typeahead' },
    {path: 'table' , component : DataTableComponent},
    {path: 'complete' , component : NgbdTableComplete},
    {path: 'usuario' , component : UsuarioController},
    {path: 'usuarioAD' , component : UsuarioADController},
    {path: 'typeahead' , component : TypeaheadComponent}
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
