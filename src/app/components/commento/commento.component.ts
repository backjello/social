import { Component, Input, OnInit } from '@angular/core';
import { Commento } from 'src/app/interface/commento';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {

  @Input() commento!: Commento
  image!: string

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUtente(this.commento.user.id).subscribe((res) => {
      this.image = res.image
    })
  }

}
