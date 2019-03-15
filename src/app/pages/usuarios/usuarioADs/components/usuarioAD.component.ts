import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Usuario } from '../../domain/usuario.model';

@Component({
       selector    : 'usuariosAD-table',
       templateUrl : './usuarioAD.component.html' 
})
export class UsuarioADComponent implements OnChanges {
    
    @Input() usuariosAD        : Usuario[] = [];
             usuarios          : Usuario[] = [];
    
    linhasPorPagina   : number = 5;
	pagina            : number = 1;
	qtdAdjacentes     : number = 2;
	filtro            : string = '';
	paginas           : Array<number>;
	exibirProximo     : boolean;
	totalRegistros    : number;
	qtdPaginas        : number;  

    
    ngOnChanges(changes: SimpleChanges) {
        if(changes.usuariosAD){
            
            this.totalRegistros = this.usuariosAD.length;
            this.pagina = 1;
            this.qtdPaginas = Math.ceil(this.totalRegistros / this.linhasPorPagina);
            this.gerarLinks();
            this.pagina = this.pagina-1;
            this.paginaUsuarios();
            this.pagina = this.pagina+1;

        }
    }
    
    paginaUsuarios(){
		this.usuarios = [];
		for( let u = (this.pagina * this.linhasPorPagina); u < (  (this.pagina * this.linhasPorPagina ) + this.linhasPorPagina ); u++ ){
				if(u >= this.usuariosAD.length){
					break;
				}
			this.usuarios.push(this.usuariosAD[u]);		
		}
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
		this.paginaUsuarios();
		this.pagina = this.pagina+1;
	}

	

}