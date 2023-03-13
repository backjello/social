import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bottonecommenti',
  templateUrl: './bottonecommenti.component.html',
  styleUrls: ['./bottonecommenti.component.css']
})
export class BottonecommentiComponent implements OnInit {

  @Input() post! : Post
  nCommenti! : number;

  // nel costruttore post è undefined
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getComments(this.post).subscribe((res)=>{
      this.nCommenti = res.total
    })
  }


}
