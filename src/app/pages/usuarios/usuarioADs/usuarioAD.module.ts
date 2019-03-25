import { NgModule } from '@angular/core';
import { UsuarioADController } from './usuarioAD/usuarioAD.controller';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from '../search/search.module';
import { UsuarioADComponent } from './components/usuarioAD.component';
import { FiltroPorNome } from './pipe/fitrarPorNome.pipe';
import { TypeaheadComponent } from '../typeahead/typeahead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
            UsuarioADController, 
            UsuarioADComponent, 
            FiltroPorNome,
            TypeaheadComponent
    ],
    exports: [UsuarioADController],
    imports: [
        CommonModule, 
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, 
        SearchModule]
})
export class UsuarioADModule{}