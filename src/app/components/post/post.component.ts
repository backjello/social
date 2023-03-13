import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { Utente } from 'src/app/interface/utente';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Post // tutti i dati del post
  // immmagine e username utente
  img!:string
  username!:string

  constructor(private api:ApiService) { 
  }
  
  ngOnInit(): void {
    this.api.getUtente( this.post.userId ).subscribe((res:Utente)=>{
      this.img = res.image
      this.username = res.username
    })
  }

}
