export class UsuarioTypeahead {
    constructor (public id : number, public nome: string) { }
}

export interface UsuarioResponse {
    totalElements  : number;
       totalPages  : number;
  linhasPorPagina  : number;
          content  : UsuarioTypeahead[];
}