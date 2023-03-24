import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-popup-nuovo-post',
  templateUrl: './popup-nuovo-post.component.html',
  styleUrls: ['./popup-nuovo-post.component.css']
})
export class PopupNuovoPostComponent {

  form: FormGroup

  constructor(
    private dialog: MatDialogRef<PopupNuovoPostComponent>,
    private fb: FormBuilder,
    private api:ApiService,
    private storage:LocalstorageService
  ) {
    this.form = this.fb.group({
      titolo: ['', Validators.required],
      body: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]],
      tags: ['']
    })
    console.log(this.form.controls['body'].errors) // {required:true,...}
  }
  get bodyInput(){
    if(this.form.controls['body'].errors == null)
      return {}
    else
      return this.form.controls['body'].errors
  }

  pubblicaPost() {
    var tags = this.form.value.tags // "film,oscar,2023" -> ["film","oscar","2023"]
    tags = tags.split(',') // ["film","oscar","2023"]
    var titolo = this.form.value.titolo
    var body = this.form.value.body
    var userID = this.storage.leggiUtente().id
    this.api.addPost(titolo,body,tags,userID).subscribe((res)=>{
      console.log(res)
      this.dialog.close()
    })
  }

  chiudi() {
    this.dialog.close()
  }


}
