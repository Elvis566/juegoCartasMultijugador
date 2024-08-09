import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.page.html',
  styleUrls: ['./list-friends.page.scss'],
})
export class ListFriendsPage implements OnInit {

  friends: any[] = [];

  constructor(private aps: ApiNodeService) { }

  ngOnInit() {
  }

  /* getFriendsData() {
    this.aps.get('https://api.example.com/friends').subscribe((data: any) => {
      this.friends = data;
    });
  } */

}
