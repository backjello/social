import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-popupcommenti',
  templateUrl: './popupcommenti.component.html',
  styleUrls: ['./popupcommenti.component.css']
})
export class PopupcommentiComponent{
  
  testoCommento:string = ""

  constructor(
    private dialogRef: MatDialogRef<PopupcommentiComponent>, // il riferimento alla modal
    @Inject(MAT_DIALOG_DATA) public post:Post, // sono i dati che passo alla modal (o popup)
    private storage:LocalstorageService,
    private api:ApiService
    ) { }
    
  aggiungiCommento() {
    const postID = this.post.id
    const userID = this.storage.leggiUtente().id
    this.api.addComment(userID,postID,this.testoCommento).subscribe((res:any)=>{
      this.post.comments?.push(res)
    })
    this.testoCommento = ''
  }

  chiudi(){
    //chiudo la modal
    this.dialogRef.close()
  }

}
