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

  email:string = localStorage.getItem('email');
  password:string = localStorage.getItem('password');


  constructor( private apiS:ApiNodeService) {
    
   }



  // saveUser(apodo:any, avatar:any){
  //   this.apiS.saveUser(apodo.value, this.email, this.password, avatar.value).subscribe({
  //     next:(datos:any)=> {

  //     },
  //     error:(e:any)=>{

  //     }
  //   })
  // }



  // async save(apodo:any) {
  //   this.newUser.apodo = apodo.value;
  //   this.cargando = true;
  //   debugger
  //   await this.firebaseS.createDocumentID(this.newUser, 'Usuarios', this.newUser.id)
  //   this.cargando = false;
  // }



}
