import { Component, Input, OnInit } from '@angular/core';
import { Utente } from 'src/app/interface/utente';

@Component({
  selector: 'app-intestazioneprofilo',
  templateUrl: './intestazioneprofilo.component.html',
  styleUrls: ['./intestazioneprofilo.component.css']
})
export class IntestazioneprofiloComponent {

  @Input()utente! :Utente

  constructor() { }

}
