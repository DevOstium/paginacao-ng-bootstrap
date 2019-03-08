import { Component } from '@angular/core';

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
		for(let d = 1; d < 200; d++){
			this.alunosTotal.push( { id:d, nome:"Fagner"} )		
		}
	}

}
