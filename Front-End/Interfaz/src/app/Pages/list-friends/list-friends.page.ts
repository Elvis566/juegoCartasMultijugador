import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.page.html',
  styleUrls: ['./list-friends.page.scss'],
})
export class ListFriendsPage implements OnInit {
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
