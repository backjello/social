import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any

  constructor(
    private fb: FormBuilder, // formbuilder per costruire la form con i campi 
    private api:ApiService, // per chiamare il backend 
    private router:Router, // per navigare nelle pagine
    private storage:LocalstorageService // per salvare i dati nel localstorage
    ) {
    //costruiamo la form
    this.form = fb.group({
      username: ['', Validators.required], //stesso nome che abbimao messo nel formcontrolname in HTML, required vuol dire che il campo è obbligatorio
      password: ['', Validators.required]
    })
  }

  submit() {
    const dati = this.form.value // {username: ..., password: ...}
    // funzione asincrona, la risposta non arriva instantaneamente, bisgona aspettare la risposta
    this.api.login(dati.username,dati.password).subscribe((res)=>{
      this.storage.salvaDati('datiUtente',res)      
      console.log(res)
      this.router.navigate(["/home"])
    })

  }

  ngOnInit(): void {
  }
}

