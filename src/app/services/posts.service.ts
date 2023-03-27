import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private allPosts:Post[] = [] // tutti i post

  constructor() { }
  
  elimina(indice:number){
    this.allPosts.splice(indice,1)
  }

  modifica(indice:number,post:Post){
    this.allPosts[indice] = post
  }

  get posts(){ // ritorna tutti i post
    return this.allPosts
  }

  set posts(postsDaSettare : Post[]){ // setta il valore di tutti i post
    this.allPosts = postsDaSettare
  }


}
