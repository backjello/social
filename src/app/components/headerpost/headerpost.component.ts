import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerpost',
  templateUrl: './headerpost.component.html',
  styleUrls: ['./headerpost.component.css']
})
export class HeaderpostComponent {

  @Input() img!:string
  @Input() username!:string
  @Input() id!:number

  constructor() { }

}
