import { NgModule } from '@angular/core';
import { PaginacaoComponent } from './paginacao.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [PaginacaoComponent],
    exports: [PaginacaoComponent],
    imports: [CommonModule]

})
export class PaginancaoModule{}