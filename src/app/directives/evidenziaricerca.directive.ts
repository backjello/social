import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEvidenziaricerca]'
})
export class EvidenziaricercaDirective implements OnInit {

  @Input() appEvidenziaricerca : string =""

  constructor(private elem:ElementRef) { }
  
  ngOnInit(): void {
    console.log(this.elem.nativeElement.innerHTML)
  }

  



}
