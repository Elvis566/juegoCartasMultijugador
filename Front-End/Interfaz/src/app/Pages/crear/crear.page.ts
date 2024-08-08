import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  GameType: any;
  constructor(private apiS: ApiNodeService) { }

  ngOnInit() {
    this.getTypeGame()
  }

  getTypeGame(){
    this.apiS.getTypeGame().subscribe({
      next:(data:any)=> {
        this.GameType = data.gameT
      },
      error:(e:any)=> {
        console.log(e);
      }
    })
  }

}
