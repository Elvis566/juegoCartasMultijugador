import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';


@Component({
  selector: 'app-select-a',
  templateUrl: './select-a.page.html',
  styleUrls: ['./select-a.page.scss'],
})
export class SelectAPage implements OnInit {

  cargando: boolean = false;
  pase:boolean = false;
  camino:boolean = true;
  itemUrl:any;
  itemId:any;

  datosAvatars: any;

  email:string = localStorage.getItem('email');
  password:string = localStorage.getItem('password');


  constructor( private apiS: ApiNodeService, private router: Router) {
    
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

   captura(item:any){
    // localStorage.setItem('avrUrl', item.url);
    // localStorage.setItem('avtId', item.id)
    this.itemId = item.id;
    this.itemUrl= item.url;
    this.camino = false;
    this.pase = false;
   }

   saveUser(apodo:any){
    this.apiS.saveUser(apodo.value, this.email, this.password, this.itemId).subscribe({
      next:(data:any)=>{
        localStorage.setItem('apodo', data.user.apodo)
        localStorage.setItem('foto', data.user.avatar_id)
        this.router.navigate(['/tabs-inicio'])

      },
      error:(e:any)=>{
        console.log(e);
      }
    })
   }


}
