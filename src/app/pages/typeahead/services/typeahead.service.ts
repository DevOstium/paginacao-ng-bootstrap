import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { UsuarioResponse, UsuarioTypeahead } from '../domain/usuario.model';
import { Observable } from 'rxjs';


const API = 'http://localhost:8080';

@Injectable()
export class TypeaheadService {
    
    constructor(private http : HttpClient){}
    
    //find( param : {nome: string} = {nome : ''})   {
    find( param :  string =  '')   {
        return this.http.get<UsuarioResponse[]>(`${API}/usuarios/paginacao/?nome=${param.toLowerCase()}`)  
    }


    resultTable( paramTable = '') : Observable<UsuarioTypeahead[]> {
        return this.http.get<UsuarioTypeahead[]>(`${API}/usuarios/paginacao/?nome=${paramTable.toLowerCase()}`).pipe( map ( resp => resp['content']));
    }

}