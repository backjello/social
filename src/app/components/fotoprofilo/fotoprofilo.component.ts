import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/interface/utente';

@Component({
  selector: 'app-fotoprofilo',
  templateUrl: './fotoprofilo.component.html',
  styleUrls: ['./fotoprofilo.component.css']
})
export class FotoprofiloComponent implements OnInit {

  utente! : Utente

  constructor() { }

  ngOnInit(): void {
  }

}
