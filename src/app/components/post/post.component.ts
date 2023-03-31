import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { Utente } from 'src/app/interface/utente';
import { PaginaPostComponent } from 'src/app/pages/pagina-post/pagina-post.component';
import { ApiService } from 'src/app/services/api.service';
import { RicercaService } from 'src/app/services/ricerca.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() indice!: number // indice del post nell'array posts del componente padre

  @Input() post!: Post // tutti i dati del post
  // immmagine e username utente
  img!: string
  username!: string

  mostraAltro: boolean = false
  immagineGrande: boolean = false

  @Output() postEliminato: EventEmitter<number> = new EventEmitter()
  @Output() postModificato: EventEmitter<Post> = new EventEmitter()

  constructor(private api: ApiService, public ricercaService:RicercaService,
    private route:ActivatedRoute) {
      // se sono nella pagina del post apro già la descrizione
      // e mostro l'immagine grande
      if(route.component == PaginaPostComponent){
        this.mostraAltro = true
        this.immagineGrande = true
      }
  }

  ngOnInit(): void {
    this.api.getUtente(this.post.userId).subscribe((res: Utente) => {
      this.img = res.image
      this.username = res.username
    })
  }

  elimina() {
    this.postEliminato.emit(this.indice)
  }
  
  modifica(post: Post) {
    console.log(post);
    this.postModificato.emit(post)
  }

}
