import { Component, OnInit } from '@angular/core';
import { TypeaheadService } from '../services/typeahead.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap,  finalize, switchMap } from 'rxjs/operators';
import { UsuarioTypeahead } from '../domain/usuario.model';
import { Subject, Observable } from 'rxjs';

@Component({
    selector     : 'typeahead-usuario',
    templateUrl  : './typeahead.component.html',
    styleUrls    : ['typeahead.component.css']
})
export class TypeaheadComponent  implements OnInit {

    filteredUsers  : UsuarioTypeahead[] = [];
    usersForm      : FormGroup;
    isLoading      = false;

    table$ : Observable<UsuarioTypeahead[]>;    

    pesquisa : Subject<string> = new Subject<string>();

    constructor(
                private formBuilder : FormBuilder,
                private service     : TypeaheadService
                ){}

    ngOnInit(): void {

        this.pesquisa
            .pipe(
                    debounceTime(400),
                    tap( () => this.isLoading = true ),
                    tap( search => (search) ? search : this.loadTable( )),
                    switchMap( search =>  {
                                        console.log("search send to server: " , search)       
                                        return   this.service.find(  search  ).pipe( finalize(  () => this.isLoading = false )   );                                
                                        } 
                            )
                ).subscribe(  response => {
                                                console.log("response['content'] : " , response['content'])
                                                this.filteredUsers = response['content']
                                            }                
                            ); 
                        



        this.usersForm = this.formBuilder.group({ userInput: null  });  
  
    }

    displayFn( usuario : UsuarioTypeahead ){
        if(usuario) {
            return usuario.nome;
        }
    }                          

    loadTable( usuario = '' ){
        console.log("loadTable : " , usuario)
       this.table$  =  this.service.resultTable(usuario);
    }


}





















