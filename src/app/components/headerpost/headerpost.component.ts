import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { PaginaPostComponent } from 'src/app/pages/pagina-post/pagina-post.component';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { PostsService } from 'src/app/services/posts.service';
import { PopupNuovoPostComponent } from '../popup-nuovo-post/popup-nuovo-post.component';

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

  @Input() indice!:number

  @Input() post!:Post // tutti i dati del post

  @Output() postEliminato: EventEmitter<any> = new EventEmitter()
  @Output() postModificato: EventEmitter<any> = new EventEmitter()


  userID! : number
  
  constructor(private storage:LocalstorageService,
    private api:ApiService,
    private route:ActivatedRoute,
    private router:Router,
    private postsService:PostsService,
    private dialog:MatDialog
    ) {
    this.userID = this.storage.leggiUtente().id
  }

  elimina() {
    this.api.deletePost(this.postID).subscribe((res)=>{
      // se siamo nella pagina del post dobbiamo lasciare la pagina
      if(this.route.component == PaginaPostComponent){
        this.router.navigate(['/home'])
      }
      //se sono nella pagina home o profilo, ricarico la pagina #1 soluzione
      // else{
      //   window.location.reload()
      // }

      // eventEmitter / output  #soluzione 2
      // else{
      //   this.postEliminato.emit()
      // }

      // servizio #soluzione 3
      else{
        this.postsService.elimina(this.indice)    
      }
    })
  }

  modifica(){
    this.dialog.open(PopupNuovoPostComponent,{
      minWidth:'500px',
      data:{ // i dati che voglio passare alla modal
        post: this.post,
        action:'update'
      }
    }).afterClosed().subscribe((res)=>{
      // codice che si attiva solo alla chiusura della modal
      if( res == undefined ) return
      console.log(res)
      // window.location.reload() //soluzione #1 aggiorno la pagina

      // soluzione #2
      this.postModificato.emit(res) //passo al padre il post aggiornato


      // soluzione #3



    })
  }


  
}
