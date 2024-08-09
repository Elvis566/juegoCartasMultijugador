import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  selectedSegment: string = 'friends';

  constructor() { }

  ngOnInit() {
    
  }

}