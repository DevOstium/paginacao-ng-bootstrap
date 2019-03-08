import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './pages/alunos/aluno.controller';
import { DataTableComponent } from './shared/componentes/data-table/data-table.component';
import { NgbdTableComplete } from './shared/componentes/complete/table-complete';

const routes: Routes = [

    { path        : '', pathMatch   : 'full',  redirectTo  : 'complete' },
    {path: 'aluno' , component : AlunoComponent},
    {path: 'table' , component : DataTableComponent},
    {path: 'complete' , component : NgbdTableComplete},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
