import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../services/produto.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Vinculo } from '../domain/vinculo.model';

@Component({
    selector    : 'produto',
    templateUrl : 'produto.view.html'
})
export class ProdutoController implements OnInit{
    
    filtro : string = '';
    categorias : any[] = [];
    checked = false;
    categoriasForm  : FormGroup;

    constructor( private service : ProdutoService,  private formBuilder : FormBuilder ){}
    
    ngOnInit(): void {

        this.categoriasForm = this.formBuilder.group(
                                                      {
                                                        nome   : [''],
                                                        enable : [false]
                                                      }
                                                    )
    }

    gravar(){

        //this.categoriasForm.getRawValue().array.

        //this.categoriasForm.getRawValue().map(c => console.log(c));

        console.log("vinculo : " , this.categoriasForm.getRawValue())
    }

    checkAll(){
        this.checked = !this.checked; 
    }

    buscaProdutos(event){
        console.log( "Recebendo os dados digitados: ", event)
        this.service
            .findProdutopagination()
            .subscribe( response => {
                               console.log(response);
                               console.log(response['totalElements']);
                               console.log(
                                            response['content']
                                            .flatMap(x => x.categorias)
                                            .map( x => x.nome)
                                            .filter( (element, index, array) => array.indexOf(element) == index )
                                            .sort( (a, b) => b.localeCompare(a) )
                                          );
                                this.categorias =    response['content']
                                                    .flatMap(x =>  x.categorias )
                                                    .map( x => x)
                                                    .filter( (element, index, array) => array.indexOf(element) == index )
                               console.log("this.categorias: " , this.categorias) 
                            }
                        );
    }


}