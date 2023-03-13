import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Commento } from 'src/app/interface/commento';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';
import { PopupcommentiComponent } from '../popupcommenti/popupcommenti.component';

@Component({
  selector: 'app-bottonecommenti',
  templateUrl: './bottonecommenti.component.html',
  styleUrls: ['./bottonecommenti.component.css']
})
export class BottonecommentiComponent implements OnInit {

  @Input() post! : Post
  nCommenti! : number;
  comments:Commento[] = []

  // nel costruttore post è undefined
  constructor(private api:ApiService, 
    private dialog:MatDialog
  ) { }

  mostraCommenti(){
    this.dialog.open(PopupcommentiComponent,{
      data:this.post // passiamo il post alla modal 
    })
  }

  ngOnInit(): void {
    this.api.getComments(this.post).subscribe((res)=>{
      //res = {total:3, comments:[...]}
      this.nCommenti = res.total
      this.comments = res.comments
      this.post.comments = this.comments
    })
  }


}
