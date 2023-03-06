import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/interface/utente';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-fotoprofilo',
  templateUrl: './fotoprofilo.component.html',
  styleUrls: ['./fotoprofilo.component.css']
})
export class FotoprofiloComponent implements OnInit {

  utente! : Utente

  constructor(private storage:LocalstorageService) { 
    this.utente = this.storage.leggiDati('datiUtente') // leggo i dati dell'utente dal localstorage
  }

  ngOnInit(): void {
  }

}
