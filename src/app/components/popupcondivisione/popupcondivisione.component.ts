import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popupcondivisione',
  templateUrl: './popupcondivisione.component.html',
  styleUrls: ['./popupcondivisione.component.css']
})
export class PopupcondivisioneComponent {
  
  constructor(private dialogRef:MatDialogRef<PopupcondivisioneComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any) { }
  
  chiudi() {
    this.dialogRef.close()
  }

  condividi(social:string){
    const path = "localhost:4200/post/"+this.data.id
    if(social == 'whatsapp'){
      // https://api.whatsapp.com/send?text=[link]
      window.location.href = "https://api.whatsapp.com/send?text="+path
    }
    // else facebook, else twitter (simile a whatsapp)
    else if( social == "mail" ){
      window.location.href = "mailto:?body="+path
    }
    else if (social == 'copy'){
      // simulo ctrl + c
      navigator.clipboard.writeText(path);
    }
  }

}
