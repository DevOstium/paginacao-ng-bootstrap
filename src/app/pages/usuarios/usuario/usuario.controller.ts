import { Component, OnInit } from '@angular/core';
import { USUARIOS } from '../DB/usuario.db'; 
import { UsuarioService } from '../service/usuario.service';
import { User } from '../domain/user.model';

@Component({
	selector    : 'usuario',
	templateUrl : 'usuario.view.html',
})
export class UsuarioController implements OnInit{
	
	linhasPorPagina   : number = 5;
	pagina            : number = 1;
	qtdAdjacentes     : number = 2;
	usuarios          : any;
	filter            : string = '';
	listaUser         : User[] = [];

	paginas          : Array<number>;
	exibirProximo    : boolean;
	totalRegistros   : number;
	qtdPaginas       : number;  

	constructor( private usuarioService : UsuarioService ) {}

	ngOnInit(): void {
		this.loadUsuariosAD();
		this.findAllUsuarios();
		this.gerarLinks();
	}

	loadUsuariosAD(){
		this.usuarioService.findAllUsuarioAD().subscribe( response => console.log(response));
	}
	
	gerarLinks() {
		this.exibirProximo = this.qtdPaginas !== this.pagina;
		this.paginas       = [];

		let iniAdjacente   = (this.pagina - this.qtdAdjacentes <= 0) 
						     ? 1 
						     : (this.pagina - this.qtdAdjacentes);

		let fimAdjacente   = ( (this.pagina + this.qtdAdjacentes) >= this.qtdPaginas) 
						     ? this.qtdPaginas 
						     : (this.pagina + this.qtdAdjacentes);
		
			for (let i=iniAdjacente; i<=fimAdjacente; i++) {
				this.paginas.push(i);
			}
	}

	paginacao(pagina: number, $event: any) {
		$event.preventDefault();
		this.pagina = pagina;
		this.gerarLinks();
		this.pagina = pagina -1;
		this.loadUsuarios();
		this.pagina = this.pagina+1;
	}

	recebeFiltro(search){
		if(search) {
			this.usuarioService
				.paginacao( search )
				.subscribe ( response => {
										this.listaUser = [];
										response['content'].forEach( x => this.listaUser.push( {id:x.id, nome:x.nome} ));
										this.totalRegistros = this.listaUser.length;
										this.pagina = 1;
										this.qtdPaginas = Math.ceil(this.totalRegistros / this.linhasPorPagina);
										this.gerarLinks();
										this.pagina = this.pagina-1;
										this.loadUsuarios();
										this.pagina = this.pagina+1;
										}	
							);
		} else {
			this.resetSearch();
		}
	}

	resetSearch(){
		this.usuarioService
			.findAll()
			.subscribe ( response => {		
									this.listaUser = [];	
									this.listaUser = response;
									this.totalRegistros = this.listaUser.length;
									this.pagina = 1;
									this.qtdPaginas = Math.ceil(this.totalRegistros / this.linhasPorPagina);
									this.gerarLinks();
									this.pagina = this.pagina-1;
									this.loadUsuarios();
									this.pagina = this.pagina+1;
									}
						);
	}

	findAllUsuarios(){
		this.usuarioService
			.findAll()
			.subscribe ( response => {		
									this.listaUser = [];	
									this.listaUser = response;
									this.totalRegistros = this.listaUser.length;
									this.pagina = this.pagina-1;
									this.loadUsuarios();
									this.pagina = this.pagina+1;
									this.qtdPaginas = Math.ceil(this.totalRegistros / this.linhasPorPagina);
									}
						);
	}

	loadUsuarios(){
		this.usuarios = [];
		for( let u = (this.pagina * this.linhasPorPagina); u < (  (this.pagina * this.linhasPorPagina ) + this.linhasPorPagina ); u++ ){
				if(u >= this.listaUser.length){
					break;
				}
			this.usuarios.push(this.listaUser[u]);		
		}
	}
}
