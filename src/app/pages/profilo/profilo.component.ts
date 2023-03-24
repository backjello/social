import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { Utente } from 'src/app/interface/utente';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {
  
  utente!:Utente
  posts: Post[] = []
  
  elimina(indice: number) {
    this.posts.splice(indice,1)
  }
  constructor(private api:ApiService, private route:ActivatedRoute) {
    //devo prendere l'id utente dai parametri del router
    const IDutente = this.route.snapshot.paramMap.get('id')
    if(IDutente == null) return
    
    //chiedo tutti i dati dell'utente al server
    this.api.getUtente(parseInt(IDutente)).subscribe((res)=>{
      this.utente = res
    })

    // chiedo tutti i post al server
    this.api.getPostByIDutente(IDutente).subscribe((res)=>{
      this.posts = res.posts
    })

  }

}
