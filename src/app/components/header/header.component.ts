import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Utente } from 'src/app/interface/utente';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { PopupNuovoPostComponent } from '../popup-nuovo-post/popup-nuovo-post.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  utente:Utente 

  constructor(private storage:LocalstorageService, private dialog:MatDialog,
    private router:Router) { 
    this.utente = storage.leggiUtente()
  }

  logout(){
    this.storage.rimuoviUtente()
    this.router.navigate(['/login'])
    
  }

  nuovoPost(){
    // apro la modal (o popup) per inserire un nuovo post
    this.dialog.open(PopupNuovoPostComponent,{
      minWidth:"500px",
      data:{
        action:'new'
      }
    })
  }

}
