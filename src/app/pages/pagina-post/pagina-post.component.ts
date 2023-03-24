import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commento } from 'src/app/interface/commento';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrls: ['./pagina-post.component.css']
})
export class PaginaPostComponent {

  post!:Post

  constructor(private route:ActivatedRoute, private api:ApiService) { 
    const postID = this.route.snapshot.paramMap.get('id') || ''
    this.api.getSinglePost(postID).subscribe((res)=>{
      this.post = res
    })
  }

}
