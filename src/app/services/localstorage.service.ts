import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  KEY_UTENTE = 'datiUtente'

  constructor() { }

  leggiUtente() { // prende i dati dell'utente
    return this.leggiDati(this.KEY_UTENTE)
  }

  salvaUtente(dati: any) { // salva i dati dell'utente
    this.salvaDati(this.KEY_UTENTE, dati)
  }

  salvaDati(indice: string, dati: any) {
    var stringa = JSON.stringify(dati) // trasformiamo in stringa i dati (nel localstorage posso salvare solo stringhe non oggetti)
    localStorage.setItem(indice, stringa) // salvo nel localstorage
  }

  leggiDati(indice: string) {
    var dati = localStorage.getItem(indice)
    if (dati != null)
      return JSON.parse(dati)

    return {} // ritorna un oggetto vuoto
  }

}
