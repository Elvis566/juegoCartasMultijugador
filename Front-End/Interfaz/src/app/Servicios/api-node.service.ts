import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  constructor( private httpclient:HttpClient) { }

  saveUser(apodo:any, email:any, password:any, avatar_id:any){
    // let avt  = new FormData();
    // avt.append('avatar', avatar);
    return this.httpclient.post('http://localhost:3000/user/create',{
      apodo: apodo, 
      email: email,
      password: password,
      avatar_id: avatar_id
    })
  }

  loginUser(email:string, password:string){
    return this.httpclient.post('http://localhost:3000/user/login',{
      email: email,
      password: password
    })
  }

  getTypeGame(){
    return this.httpclient.get('http://localhost:3000/gameType/obtener')
  }

  getAvatarAll(){
    return this.httpclient.get('http://localhost:3000/avatar/obtenerAll')
  }

 

  getAvatar(id:any){
    return this.httpclient.get('http://localhost:3000/avatar/obtener/'+id)
  }

  getUserAll(id:any){
    return this.httpclient.get('http://localhost:3000/user/obtener/'+id)
  }

  getFriends(id:any){
    return this.httpclient.get('http://localhost:3000/friends/obtener/'+id)
  }

  createFriend(user_id:any, friend_id:any){
    return this.httpclient.post('http://localhost:3000/friends/create',{
      user_id:user_id,
      friend_id: friend_id
    })
  }


}
