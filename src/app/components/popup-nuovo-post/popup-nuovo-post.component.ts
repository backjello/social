import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/interface/post';
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
    @Inject(MAT_DIALOG_DATA) private data:{
      post:Post,
      action:'new'|'update'|'delete'
    },
    private fb: FormBuilder,
    private api:ApiService,
    private storage:LocalstorageService
  ) {
    this.form = this.fb.group({
      titolo: [this.data.post?.title, Validators.required],
      body: [this.data.post?.body, [Validators.required, Validators.maxLength(1000), Validators.minLength(10)]],
      tags: [this.data.post?.tags.toString()] // trasformo array in string ["film","oscar","2023"] -> "film,oscar,2023"
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
    if(this.data.action == 'new')
      this.api.addPost(titolo,body,tags,userID).subscribe((res)=>{
        console.log(res)
        this.dialog.close()
      })
    else if(this.data.action == 'update'){
      this.api.updatePost(this.data.post.id,titolo,body,tags).subscribe((res)=>{
        this.dialog.close(res)
      })
    }
  }

  chiudi() {
    this.dialog.close()
  }


}
