import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  private testoRicerca : string = ""

  get ricerca(){
    return this.testoRicerca
  }
  set ricerca(testo:string){
    this.testoRicerca = testo
  }

}
