import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-popupcommenti',
  templateUrl: './popupcommenti.component.html',
  styleUrls: ['./popupcommenti.component.css']
})
export class PopupcommentiComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PopupcommentiComponent>, // il riferimento alla modal
    @Inject(MAT_DIALOG_DATA) public post:Post // sono i dati che passo alla modal (o popup)
  ) { }

  ngOnInit(): void {
  }

  chiudi(){
    //chiuda la modal
    this.dialogRef.close()
  }

}
