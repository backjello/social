import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent implements OnInit{
  
  @Input() post! : Post 
  reactions! : number 
  likeLasciato : boolean = false
  
  constructor(private api:ApiService) { }

  ngOnInit(): void { // eseguo questa operazione nell'onInit perchè nel costruttore post è undefined
    this.reactions = this.post.reactions
  }


  
  // funzione che gestisce il click del tasto like
  lasciaLike() {
    // ho già messo like, quindi tolgo il like
    if(this.likeLasciato){
      this.post.reactions --
      this.likeLasciato = false
    }
    //non ho messo mi piace, quindi posso metterlo
    else{
      this.post.reactions ++
      this.likeLasciato = true
    }
    //chiamo il backend con il numero di like aggiornato
    this.api.setLike(this.post).subscribe((res:Post)=>{
      // il backend ci passa il post aggiornato (il numero di like è aumentato di 1)
      this.reactions = res.reactions // aggiorno il numero di like
    })
  
  }
  

}
