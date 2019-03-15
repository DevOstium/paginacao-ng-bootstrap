import { NgModule } from '@angular/core';
import { UsuarioADController } from './usuarioAD/usuarioAD.controller';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from '../search/search.module';
import { UsuarioADComponent } from './components/usuarioAD.component';
import { FiltroPorNome } from './pipe/fitrarPorNome.pipe';

@NgModule({
    declarations: [UsuarioADController, UsuarioADComponent, FiltroPorNome],
    exports: [UsuarioADController],
    imports: [CommonModule, HttpClientModule, SearchModule]
})
export class UsuarioADModule{}