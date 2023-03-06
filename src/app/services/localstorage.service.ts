import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  salvaDati(indice:string,dati:any){
    var stringa = JSON.stringify(dati) // trasformiamo in stringa i dati (nel localstorage posso salvare solo stringhe non oggetti)
    localStorage.setItem(indice,stringa) // salvo nel localstorage
  }
  
  leggiDati(indice:string){
    var dati = localStorage.getItem(indice)
    if( dati != null )
      return JSON.parse(dati)
    
    return {} // ritorna un oggetto vuoto
  }

}
