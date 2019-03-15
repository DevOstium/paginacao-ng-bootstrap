import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/user.model';
import { Usuario } from '../domain/usuario.model';

const URL = 'http://localhost:8080';

@Injectable({ providedIn : 'root'})
export class UsuarioService{

    constructor(public http: HttpClient){}

    //usuarioPaginacao(linhasPorPagina : number = 24, pagina : number = 0, nome : string = ''){
    paginacao( nome : string = ''){

        //return this.http.get(`${URL}/?linhasPorPagina=${linhasPorPagina}&pagina=${pagina}&nome=${nome}`);
        return this.http.get(`${URL}/usuarios/paginacao/?nome=${nome}`);

    }

    findAll(){
        return this.http.get<User[]>(`${URL}/usuarios`);
    }

    findAllUsuarioAD(){
        return this.http.get<Usuario[]>(`${URL}/usuarioAD`);
    }

}


