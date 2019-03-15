import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../domain/usuario.model';

@Component({
	selector    : 'usuarioAD',
	templateUrl : 'usuarioAD.view.html',
})
export class UsuarioADController implements OnInit{
	
	filtro      : string = '';
	usuariosAD  : Usuario[] = [];

	constructor( private usuarioService : UsuarioService ) {}

	ngOnInit(): void {
		this.loadUsuariosAD();
	}

	loadUsuariosAD(){
		this.usuarioService.findAllUsuarioAD()
						   .subscribe( response => {
													this.usuariosAD = [];
													this.usuariosAD = response;
						   						   }				
									);
	}

}
