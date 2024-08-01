import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  constructor( private httpclient:HttpClient) { }

  saveUser(apodo:any, email:any, password:any, avatar:any){
    // let avt  = new FormData();
    // avt.append('avatar', avatar);
    this.httpclient.post('/localhost:3000/user/create',{
      apodo: apodo, 
      email: email,
      password: password,
      avatar: avatar
    })
  }

}
