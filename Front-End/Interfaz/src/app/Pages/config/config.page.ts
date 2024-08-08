import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async shareApp(){
    await Share.share({
      title: 'DrinkMaster',
      text: 'Es algo realmente asombroso que debes ver jugar hoy mismo',
      url: 'http://ionicframework.com/',
    });
  }

}
