import { NgModule } from '@angular/core';
import { PaginancaoModule } from 'src/app/shared/componentes/paginacao/paginancao.module';
import { CommonModule } from '@angular/common';
import { UsuarioController } from './usuario/usuario.controller';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';

@NgModule({
	declarations: [
		UsuarioController
	],
	imports: [ 
		CommonModule,
		HttpClientModule,
		SearchModule,
		PaginancaoModule
	],
})
export class UsuarioModule {}