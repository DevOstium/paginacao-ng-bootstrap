import { NgModule } from '@angular/core';
import { PaginancaoModule } from 'src/app/shared/componentes/paginacao/paginancao.module';
import { AlunoComponent } from './aluno.controller';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [ 
		CommonModule,
		PaginancaoModule
	],
	declarations: [
		AlunoComponent
	]
})
export class AlunoModule {}