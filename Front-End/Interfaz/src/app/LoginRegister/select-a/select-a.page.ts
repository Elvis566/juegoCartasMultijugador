import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';


@Component({
  selector: 'app-select-a',
  templateUrl: './select-a.page.html',
  styleUrls: ['./select-a.page.scss'],
})
export class SelectAPage implements OnInit {

  cargando: boolean = false;
  pase:boolean = true;

  datosAvatars: any;

  email:string = localStorage.getItem('email');
  password:string = localStorage.getItem('password');


  constructor( private apiS: ApiNodeService) {
    
   }

   ngOnInit() {
     this.getGaleriaAll();
   }

   

   goGaleria(){
    
    this.pase= true;
   }

   getGaleriaAll(){
    this.apiS.getAvatarAll().subscribe({
      next:(datos:any)=> {
        this.datosAvatars= datos.avatars;
      },
      error:(e:any)=> {
        debugger
        console.log(e);
      }
    })
   }


}
