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

  getPosts(){
    return this.http.get<any>(this.API_URL + 'posts')
  }

  setLike(post:Post): Observable<any> { // passiamo tutti i dati del post al quale vogliamo mettere like
    return this.http.put(
      this.API_URL + 'posts/' + post.id, //endpoint 
      { reactions: post.reactions } // body della richiesta
    )
  }

  getUtente(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL + 'user/' + id)
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.API_URL + "auth/login", {
      username: username,
      password: password
    })
  }

}
