import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  constructor( private httpclient:HttpClient) { }

  saveUser(apodo:any, email:any, password:any, avatar:any){
    // let avt  = new FormData();
    // avt.append('avatar', avatar);
    return this.httpclient.post('http://localhost:3000/user/create',{
      apodo: apodo, 
      email: email,
      password: password,
      avatar: avatar
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
    return this.httpclient.get('http://localhost:3000/avatar/obtenerAll').pipe(
      map((data: any) => {
        return data.avatars.map((avatar: any) => {
          const bufferData = avatar.avatar.data;
          const base64String = this.arrayBufferToBase64(bufferData);
          avatar.avatarUrl = `data:image/png;base64,${base64String}`;
          return avatar;
        });
      })
    )
  }

 

  getAvatar(id:any){
    return this.httpclient.get('http://localhost:3000/avatar/obtener/'+id).pipe(
      map((data: any) => {
        const bufferData = data.avatar.avatar.data;
        const base64String = this.arrayBufferToBase64(bufferData);
        data.avatar.avatarUrl = `data:image/png;base64,${base64String}`;
        return data.avatar;
      })
    )
  }

  private arrayBufferToBase64(buffer: any): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

}
