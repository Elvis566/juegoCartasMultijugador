import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-sala-espera',
  templateUrl: './sala-espera.page.html',
  styleUrls: ['./sala-espera.page.scss'],
})
export class SalaEsperaPage implements OnInit {

  amigos:any;
  id: any = localStorage.getItem('idUser');

  constructor(private aps: ApiNodeService) { }

  ngOnInit() {
    this.getFriends();
  }

  getFriends(){
    this.aps.getFriends(this.id).subscribe({
      next:(data:any)=> {
        this.amigos = data.friendsData
        // this.avatar_id = data.friendsData.avatar
      },
      error:(e:any)=>{
        console.log(e);
      }
    })
  }

}
