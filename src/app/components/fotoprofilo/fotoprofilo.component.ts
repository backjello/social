import { Component, Input, OnInit } from '@angular/core';
import { Utente } from 'src/app/interface/utente';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-fotoprofilo',
  templateUrl: './fotoprofilo.component.html',
  styleUrls: ['./fotoprofilo.component.css']
})
export class FotoprofiloComponent{

  @Input() src! :string // url dell'immagine della foto profilo utente
  @Input() smallImg:boolean = false

  constructor() { 
  }

}
