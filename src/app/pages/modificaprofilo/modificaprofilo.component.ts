import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utente } from 'src/app/interface/utente';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-modificaprofilo',
  templateUrl: './modificaprofilo.component.html',
  styleUrls: ['./modificaprofilo.component.css']
})
export class ModificaprofiloComponent {
  
  form: FormGroup
  utente: Utente
  utenti: Utente[] = []
  
  constructor(private fb: FormBuilder, private storage: LocalstorageService,
    private api:ApiService) {
      this.utente = storage.leggiUtente()
      this.form = fb.group({
        username: [this.utente.username,[Validators.required,Validators.maxLength(12),Validators.minLength(5)]],
        firstName:[this.utente.firstName,[Validators.required]],
        lastName:[this.utente.lastName,[Validators.required]],
        email:[this.utente.email,[Validators.required, Validators.email]],
        gender:[this.utente.gender]
    })
    this.api.getUtenti().subscribe((res)=>{
      // ritorna solo i primi 30 utenti, controlliamo solo questi per test, 
      // il controllo dovrebbe essere fatto dal BE 
      // (pensiamo se avessimo il numero di utenti di instagram o facebook)
      this.utenti = res.users
      console.log(this.utenti)
    })
  }
  
  utenteEsistente(): boolean {
    for (let index = 0; index < this.utenti.length; index++) {
      const element:Utente = this.utenti[index];
      if( element.username == this.form.value.username )
      return true
    }
    return false
  }
  submit() {
    if( !this.form.valid )//form non valida
      return
    
    else {
      if(this.utenteEsistente() == false){
        this.api.salvaUtente(this.form.value).subscribe((res)=>{
          console.log(res);
        })
      }
      
    }    
  }
  

}
