import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:8080/produtos/paginacao';

@Injectable()
export class ProdutoService{

    constructor(public http : HttpClient){}

    findProdutopagination(){

        /*
        "nome",           
        "categorias",     
        "pagina",         
        "linhasPorPagina",
        "orderBy",        
        "direction",      
       */

        return this.http.get(`${API}/?categorias=1,2,3`);
    }


}