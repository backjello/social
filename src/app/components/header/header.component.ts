import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/interface/utente';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  utente:Utente 

  constructor(private storage:LocalstorageService) { 
    this.utente = storage.leggiUtente()
  }

}
