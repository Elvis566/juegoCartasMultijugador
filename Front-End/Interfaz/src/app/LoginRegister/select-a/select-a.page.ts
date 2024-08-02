import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';
import { FirebaseSService } from 'src/app/Servicios/firebase-s.service';


@Component({
  selector: 'app-select-a',
  templateUrl: './select-a.page.html',
  styleUrls: ['./select-a.page.scss'],
})
export class SelectAPage {

  cargando: boolean = false;
  pase:boolean = true;

  datosAvatars: any;

  email:string = localStorage.getItem('email');
  password:string = localStorage.getItem('password');


  constructor( private apiS: ApiNodeService) {
    
   }

   goGaleria(){
    debugger
    this.pase= true;
   }

   getGaleriaAll(){
    this.apiS.getAvatarAll().subscribe({
      next:(datos:any)=> {
        debugger
        this.datosAvatars= datos.avatars;
      },
      error:(e:any)=> {
        console.log(e);
        debugger
      }
    })
   }


}
