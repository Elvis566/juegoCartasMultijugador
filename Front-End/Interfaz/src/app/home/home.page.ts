import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from '../Servicios/api-node.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  apodo: string= localStorage.getItem('apodo');
  foto: string= localStorage.getItem('foto');
  avatars:any;

  constructor(private apiS: ApiNodeService) {}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    console.log(this.foto);
    this.apiS.getAvatar(this.foto).subscribe({
      next:(data:any)=> {
        this.avatars = data.avatar
      },
      error:(e:any)=>{
        debugger
        console.log(e);
      }
    })
  }
}
