import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor( private apiS: ApiNodeService, private router:Router) { }

  login(email:any, password:any){
    console.log(email.value+password.value);
    debugger
    this.apiS.loginUser(email.value, password.value).subscribe({
      next: (datos:any)=>{

        localStorage.setItem('apodo', datos.user.apodo)
        localStorage.setItem('foto', datos.user.avatar_id)
        localStorage.setItem('idUser', datos.user.id)



        this.router.navigate(['/tabs-inicio'])
      },
      error:(e:any)=>{
        console.log(e);
      }
    })
    
    
  }

}
