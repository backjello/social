import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/interface/post';
import { PopupcondivisioneComponent } from '../popupcondivisione/popupcondivisione.component';

@Component({
  selector: 'app-condividi',
  templateUrl: './condividi.component.html',
  styleUrls: ['./condividi.component.css']
})
export class CondividiComponent {

  @Input()post!:Post

  constructor(private dialog : MatDialog) { }

  condividi(){
    this.dialog.open(PopupcondivisioneComponent,{
      minWidth:"500px",
      data: this.post
    })
  }

}
