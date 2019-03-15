import { Component } from '@angular/core';
import { USUARIOS } from '../usuarios/DB/usuario.db' 

@Component({
	selector: 'alunos',
	templateUrl: 'aluno.view.html',
})
export class AlunoComponent {

	pagina        : number = 0;
	qtdPorPagina  : number = 5;
	qtdAdjacentes : number = 2;

	alunos: any;
	alunosTotal = [];
	
	constructor() {
		this.createDB ();
		this.popularAlunos();
	}
	
	paginar($event: any) {
		this.pagina = $event - 1;
		this.popularAlunos();
	}

	popularAlunos() {
		this.alunos = [];
			for ( let i = ( this.pagina * this.qtdPorPagina ); 	i < (  (this.pagina * this.qtdPorPagina) + this.qtdPorPagina ); i++ ) {
		
					if (i >= this.alunosTotal.length) {
						break;
					}

				this.alunos.push(this.alunosTotal[i]);
			}
	}
	
	createDB (){
		
		let nome = this.removerAcentos("Fábrîca");
		console.log(nome);

		console.log(USUARIOS.length)
		console.log(USUARIOS)


		for(let d = 1; d < 200; d++){
			this.alunosTotal.push( { id:d, nome:"Fagner"} )		
		}
	}

	removerAcentos( s : string ) {
		 return s.normalize('NFD').replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, "") 
	}

}
