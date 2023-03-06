import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URL: string = "https://dummyjson.com/"

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
