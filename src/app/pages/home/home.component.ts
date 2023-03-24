import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  //posts: Post[] = [] // tutti i post 
  finiti: boolean = false; // se i post sono finiti o ne posso caricare altri
  metodoCaricamento: number = 2; // 1 caricamento infito 2 caricamento a pagine
  pagina:number = 0; //mi indica a che pagina sono (solo per caricamento 2 )
  totalePost:number =  0 // numero totale di post nella pagina
  nPagine:number[] = [] // [1,2,3,4,5]
  
  constructor(
    private api: ApiService,
    public postService:PostsService
    ) {
      this.mostraAltriPost()
  }

  elimina(indice:number) {
    //abbiamo l'id del post ci serve il suo indice nell'array
    // for (let i = 0; i < this.posts.length; i++) {
    //   const POST = this.posts[i]
    //   if(postID == POST.id){
    //     this.posts.splice( i, 1)
    //   }
    // }
    // soluzione con indice
    //this.posts.splice(indice,1)
  }

  cambiaPagina(pagina:number){
    // this.pagina è 1 ma devo caricare la pagina 0
    this.pagina = pagina -1 // aggiorniamo il numero della pagina
    window.scrollTo(0, 0) // ritorno in cima alla pagina
    this.api.getPosts(this.pagina * 30).subscribe((res)=>{
      //this.posts = res.posts
      this.postService.posts = res.posts
      // è sostanzialmente la stessa cosa di -> this.postService.setPosts(res.posts)
    })
  }

  mostraAltriPost(opzione: string = '') { //funzione per richiedere al backend i post e aggiungerli alla pagina

    const N_POST = this.postService.posts.length // numero di post che ho caricato

    switch (opzione) {
      case '': // caricamento con metodo 1 (infinito)
        // passo N_POST a getPost in modo da richiedere i 30 post successivi
        this.api.getPosts(N_POST).subscribe((res) => {
          //this.posts = this.posts.concat(res.posts) metodo altenativo
          this.postService.posts = [...this.postService.posts, ...res.posts] // i post del server
          this.totalePost = res.total 
          for (let i = 0; i < this.totalePost / 30; i++) {
            this.nPagine[i] = i+1
          }
          if (this.postService.posts.length == res.total) { //res.total contiene il numero totale di post sul server
            this.finiti = true
          }
        })
      break;
      
      case '+': // tasto avanti
        this.pagina ++ // vado avanto di una pagina
        window.scrollTo(0, 0) // ritorno in cima alla pagina
        this.api.getPosts(this.pagina * 30).subscribe((res)=>{
          this.postService.posts = res.posts
        })
      break
      
      case '-': // tasto indietro
        this.pagina -- // torno indietro di una pagina
        window.scrollTo(0, 0) // ritorno in cima alla pagina
        this.api.getPosts(this.pagina * 30).subscribe((res)=>{
          this.postService.posts = res.posts
        })
      break
     
        
    }


  }


}
