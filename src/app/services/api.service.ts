import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_URL: string = "https://dummyjson.com/"

  getComments(post:Post){
    return this.http.get<any>(this.API_URL + 'comments/post/' + post.id)
  }

  getPosts(start:number = 0){
    return this.http.get<any>(this.API_URL + 'posts', {
      params:{ // parametri get
        skip: start
      }
    })
  }

  deletePost(postID:number){
    return this.http.delete( this.API_URL + 'posts/' + postID )
  }

  setLike(post:Post): Observable<any> { // passiamo tutti i dati del post al quale vogliamo mettere like
    return this.http.put(
      this.API_URL + 'posts/' + post.id, //endpoint 
      { reactions: post.reactions } // body della richiesta
    )
  }

  getUtente(id: number | string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'user/' + id)
  }

  getPostByIDutente(userID:number | string){
    return this.http.get<any>(this.API_URL + 'posts/user/' + userID)
  }

  getSinglePost(postID:number | string){
    return this.http.get<any>(this.API_URL + 'posts/' + postID)
  }

  addComment(userID:number ,postID:number, bodyComment:string ){
    return this.http.post(this.API_URL + 'comments/add',{
      userId: userID,
      postId: postID,
      body:   bodyComment
    })
  }

  addPost(titolo:string,body:string,tags:string[],userID:number){
    return this.http.post(this.API_URL + 'posts/add', {
      title:titolo,
      body:body,
      tags:tags,
      userId:userID
    })
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.API_URL + "auth/login", {
      username: username,
      password: password
    })
  }

}
