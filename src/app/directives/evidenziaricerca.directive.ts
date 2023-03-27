import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { RicercaService } from '../services/ricerca.service';

@Directive({
  selector: '[appEvidenziaricerca]'
})
export class EvidenziaricercaDirective implements OnInit {

  constructor(private elem:ElementRef, private ricercaService:RicercaService) { }
  
  
  ngOnInit(): void {
    const RICERCA = this.ricercaService.ricerca
    console.log("l'ultima ricerca è: "+RICERCA)
    console.log(this.elem.nativeElement.innerHTML)
  }

  



}
