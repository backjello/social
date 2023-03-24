import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { Utente } from 'src/app/interface/utente';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() indice!:number // indice del post nell'array posts del componente padre

  @Input() post!: Post // tutti i dati del post
  // immmagine e username utente
  img!:string
  username!:string

  @Output() postEliminato : EventEmitter<number> = new EventEmitter()

  constructor(private api:ApiService) { 
  }
  
  ngOnInit(): void {
    this.api.getUtente( this.post.userId ).subscribe((res:Utente)=>{
      this.img = res.image
      this.username = res.username
    })
  }

  elimina(){
    this.postEliminato.emit(this.indice)
  }

}
