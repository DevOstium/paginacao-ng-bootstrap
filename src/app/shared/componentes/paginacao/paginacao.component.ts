import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
	selector    : 'tabela-paginacao',
	templateUrl : 'paginacao.component.html',
})
export class PaginacaoComponent implements OnInit {
	
	public static readonly TOTAL_PAGINAS_PADRAO    : number = 20;
	public static readonly PAGINAS_PADRAO          : number = 1;
	public static readonly TOTAL_REGISTROS_PADRAO  : number = 0;
	public static readonly ADJACENTES_PADRAO       : number = 2;

	@Input()  linhasPorPagina    : number;
	@Input()  totalRegistros     : number;
	@Input()  qtdAdjacentes      : number;

	@Output() onPaginate      = new EventEmitter<number>();

	pagina        : number;
	paginas       : Array<number>;
	exibirProximo : boolean;
	qtdPaginas    : number;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.qtdAdjacentes      = this.qtdAdjacentes    || PaginacaoComponent.ADJACENTES_PADRAO;
		this.linhasPorPagina    = this.linhasPorPagina  || PaginacaoComponent.TOTAL_PAGINAS_PADRAO;
		this.totalRegistros     = this.totalRegistros   || PaginacaoComponent.TOTAL_REGISTROS_PADRAO;
		
		this.pagina         = +this.route.snapshot.queryParams['pagina'] || PaginacaoComponent.PAGINAS_PADRAO;
		this.qtdPaginas     = Math.ceil(this.totalRegistros / this.linhasPorPagina);
		
		this.gerarLinks();
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

	paginar(pagina: number, $event: any) {
	
		$event.preventDefault();
	
		this.pagina = pagina;
	
		this.gerarLinks();
	
		this.onPaginate.emit(pagina);
	}
}
