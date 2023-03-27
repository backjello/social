import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { PostsService } from 'src/app/services/posts.service';
import { RicercaService } from 'src/app/services/ricerca.service';

@Component({
  selector: 'app-barraricerca',
  templateUrl: './barraricerca.component.html',
  styleUrls: ['./barraricerca.component.css']
})
export class BarraricercaComponent {

  value:string = ""
  cronologia: string[] = [] // le ultime ricerche fatte dall'utente

  constructor(private api:ApiService, private postsService:PostsService,
    private storage:LocalstorageService, private ricercaService:RicercaService) {
      this.cronologia = this.storage.leggiRicerca()
  }

  ricerca(){
    console.log("il testo cercato è " + this.value)
    this.api.ricercaPost(this.value).subscribe((res)=>{
      console.log(res) // res.posts -> Post[]
      this.postsService.posts = res.posts
      // salvataggio delle ricerche
      this.storage.salvaRicerca(this.value)
      this.cronologia = this.storage.leggiRicerca()
      this.ricercaService.ricerca = this.value // aggiorno il valore dell'ultima ricerca
    })
  }

}
