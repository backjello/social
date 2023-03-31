import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEvidenziaricerca]'
})

export class EvidenziaricercaDirective implements OnChanges {

  @Input() appEvidenziaricerca : string = ""

  constructor(private elem:ElementRef) { 
  }

  ngOnChanges(): void { //funzione che si attiva ogni volta che il valore di un input cambia
    // console.log("il nuovo valore di ricerca è " + this.appEvidenziaricerca)
    if(this.appEvidenziaricerca == "") return
    
    if(this.elem.nativeElement.innerHTML == "") // soluzione dirty ma rapida
      setTimeout(() => { 
        this.ngOnChanges() // aspetto .1 secondi e richiamo la funzione
      }, 100); 

    else{

      console.log("il testo da evidenziare è "+this.elem.nativeElement.innerHTML)

      this.elem.nativeElement.innerHTML = this.elem.nativeElement.innerHTML.replaceAll(
        this.appEvidenziaricerca,
        "<span style='background-color:yellow'>" + this.appEvidenziaricerca + "</span>"
      )
    }
    
  }

}
