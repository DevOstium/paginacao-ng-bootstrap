import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector : 'input-pesquisa',
    templateUrl : './pesquisa.component.html'
})
export class PesquisaComponent implements OnInit {
    
    termoDigitado : Subject<string> = new Subject<string>();
    @Input()  filtro: string;
    @Output() eventPesquisa  = new EventEmitter<string>();
    
    ngOnInit(): void {
        this.termoDigitado.pipe( debounceTime(400)).subscribe( termoDigitado => this.eventPesquisa.emit(termoDigitado) )
    }
}