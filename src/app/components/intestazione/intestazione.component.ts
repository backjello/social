import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intestazione',
  templateUrl: './intestazione.component.html',
  styleUrls: ['./intestazione.component.css']
})
export class IntestazioneComponent {
  // sono proprietà di input in modo tale che il comp. padre le possa passare a questo componente
  @Input() nome!: string // nome dell'utente 
  @Input() img!: string // url dell'immagine dell'utente
  @Input() id!: number // id dell'utente

  @Input() smallImg:boolean = false


  constructor() { }

}
