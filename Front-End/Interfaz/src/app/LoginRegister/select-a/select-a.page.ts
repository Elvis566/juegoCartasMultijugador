import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/user.models';

@Component({
  selector: 'app-select-a',
  templateUrl: './select-a.page.html',
  styleUrls: ['./select-a.page.scss'],
})
export class SelectAPage implements OnInit {

  newUser: UserI; 

  constructor() { }

  ngOnInit() {
  }

}
