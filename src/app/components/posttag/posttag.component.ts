import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { RicercaService } from 'src/app/services/ricerca.service';

@Component({
  selector: 'app-posttag',
  templateUrl: './posttag.component.html',
  styleUrls: ['./posttag.component.css']
})
export class PosttagComponent implements OnInit {

  @Input() post! : Post

  constructor(public ricercaService:RicercaService) { }

  ngOnInit(): void {
  }

}
