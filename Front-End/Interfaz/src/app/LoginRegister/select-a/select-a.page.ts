import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/user.models';
import { FirebaseSService } from 'src/app/Servicios/firebase-s.service';


@Component({
  selector: 'app-select-a',
  templateUrl: './select-a.page.html',
  styleUrls: ['./select-a.page.scss'],
})
export class SelectAPage implements OnInit {

  newUser: UserI; 
  cargando: boolean = false;

  constructor( private firebaseS: FirebaseSService) {
    this.initUser();
   }

  ngOnInit() {
    this.initUser()
  }

  initUser() {
    this.newUser = {
      email:  localStorage.getItem('email') ,
      password: localStorage.getItem('password'),
      apodo: null,
      avatar: null,
      id: this.firebaseS.createIdDoc(),
    }
  } 

  async save(apodo:any) {
    this.newUser.apodo = apodo.value;
    this.cargando = true;
    debugger
    await this.firebaseS.createDocumentID(this.newUser, 'Usuarios', this.newUser.id)
    this.cargando = false;
  }

}
