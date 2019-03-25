  import {Component, Injectable} from '@angular/core';
  import {HttpClient, HttpParams} from '@angular/common/http';
  import {Observable, of} from 'rxjs';
  import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { Usuario } from '../domain/usuario.model';
  
  const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
  
  const URL = 'http://localhost:8080';

  const PARAMS = new HttpParams({
                                fromObject: {
                                              action: 'opensearch',
                                              format: 'json',
                                              origin: '*'
                                            }
                              });
  
  @Injectable()
  export class WikipediaService {

      constructor(private http: HttpClient) {}
  
      search(term: string) {
            if (term === '') {
              return of([]);
            }
            
            //return this.http.get( WIKI_URL, { params: PARAMS.set('search', term) } ).pipe( map(  response =>  response[1] ) );

            return this.http.get(`${URL}/modulos`).pipe( map(  response => response )   );
      }
  }
  
  @Component({
    selector     : 'typeahead-focus',
    templateUrl  : './typeahead.component.html',
    providers    : [WikipediaService],
    styles       : [`.form-control { width: 300px; display: inline; }`]
  })
  export class TypeaheadComponent {

    model         : any;
    searching     = false;
    searchFailed  = false;
  
    constructor(private _service: WikipediaService) {}
  
    search = ( text$: Observable<string> ) =>
                    text$.pipe (
                                debounceTime(300),
                                distinctUntilChanged(),
                                tap( () => this.searching = true ),
                                switchMap( term =>
                                                this._service.search( term )
                                                             .pipe( tap( x =>   console.log("res : ",  x) )  )
                                                             .pipe(
                                                                    tap( () => this.searchFailed = false ),
                                                                    catchError( () => {
                                                                                        this.searchFailed = true;
                                                                                      return of([]);
                                                                                      }
                                                                              )
                                                                    )
                                          ),
                                tap( () => this.searching = false )
                              )
  }