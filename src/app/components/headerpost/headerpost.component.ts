import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PaginaPostComponent } from 'src/app/pages/pagina-post/pagina-post.component';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-headerpost',
  templateUrl: './headerpost.component.html',
  styleUrls: ['./headerpost.component.css']
})
export class HeaderpostComponent {
  
  @Input() img!:string
  @Input() username!:string
  @Input() id!:number
  
  @Input() postID!:number

  userID! : number
  
  constructor(private storage:LocalstorageService,
    private api:ApiService, private route:ActivatedRoute,
    private router:Router) {
    this.userID = this.storage.leggiUtente().id
  }

  elimina() {
    this.api.deletePost(this.postID).subscribe((res)=>{
      // se siamo nella pagina del post dobbiamo lasciare la pagina
      if(this.route.component == PaginaPostComponent){
        this.router.navigate(['/home'])
      }
    })
  }
  
}
