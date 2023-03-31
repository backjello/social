import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  private KEY_UTENTE = 'datiUtente'
  private KEY_RICERCA = 'cronologia'
  
  constructor() { }
  
  rimuoviUtente(){
    localStorage.removeItem(this.KEY_UTENTE)
  }
  
  leggiRicerca(): string[] {
    var temp = localStorage.getItem(this.KEY_RICERCA)
    if(temp == null) 
      return [] // se non ho salvato nulla ritorno un array vuoto
    
    return JSON.parse(temp)
  }


  salvaRicerca(ricerca:string) {
    // ci serve un array con le ultime ricerche
    var temp:any = localStorage.getItem(this.KEY_RICERCA)

    if(temp == null /* typeof temp == 'null' */){
      temp = [ricerca]
    }
    else{

      temp = JSON.parse(temp) // "[1,2,3]" -> [1,2,3] (da stringa a oggetto)

      //controllo se la ricerca è già salvata
      for (let index = 0; index < temp.length; index++) {
        const element = temp[index];
        if( element == ricerca ){
          return //blocco l'esecuzione della funzione
        }
      }

      const N_RICERCHE = temp.length // ottengo il numero delle ricerche salvate
      if(N_RICERCHE == 5){ // salvo al massimo 5 ricerche
        // tolgo l'ultimo elemento
        temp.pop() // temp.splice(4,1)
      }
      temp.unshift(ricerca) //serve a mettere un elemento in cima ad un array
    }
    temp = JSON.stringify(temp)
    localStorage.setItem(this.KEY_RICERCA, temp)
  }

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
