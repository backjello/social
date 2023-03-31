import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEvidenziaricerca]'
})
export class EvidenziaricercaDirective {

  @Input() appEvidenziaricerca : string = ""

  constructor(private elem:ElementRef) { }

}
