import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../../domain/usuario.model';

@Pipe({name : 'filtroPorNome'})
export class FiltroPorNome implements PipeTransform {
 
    transform(usuariosAD: Usuario[], nomeUsuario : string) {
        
        nomeUsuario = this.removerAcentos(nomeUsuario.toLowerCase());
        
        if(nomeUsuario){
            return usuariosAD.filter( usuario => this.removerAcentos(usuario.name.toLowerCase()).includes(nomeUsuario) );
        } else {
            return usuariosAD;
        }

    }

    removerAcentos( s : string ) {
        return s.normalize('NFD').replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, "") 
    }

}