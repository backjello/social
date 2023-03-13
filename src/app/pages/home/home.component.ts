import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  posts:Post[] = [] // tutti i post 

  constructor(private api:ApiService) {
    this.api.getPosts().subscribe((res:any)=>{
      this.posts = res.posts // tutti i post del server
    })
  }

}
