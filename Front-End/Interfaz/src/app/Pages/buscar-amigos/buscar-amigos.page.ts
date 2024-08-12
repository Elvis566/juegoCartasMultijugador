import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-buscar-amigos',
  templateUrl: './buscar-amigos.page.html',
  styleUrls: ['./buscar-amigos.page.scss'],
})
export class BuscarAmigosPage implements OnInit {
  datos: any;
  id: any = localStorage.getItem('idUser');


  constructor(private apiS:ApiNodeService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.apiS.getUserAll(this.id).subscribe({
      next:(data:any)=>{
        this.datos = data.users;
      },error:(e:any)=> {
        console.log(e);
      }
    })
  }

  createFriend(friend_id:any){
    this.apiS.createFriend(this.id, friend_id).subscribe({
      next:(data:any)=>{
      }, error:(e:any)=>{
        console.log(e);
      }

    })
  }

}
