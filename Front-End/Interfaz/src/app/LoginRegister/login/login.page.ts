import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNodeService } from 'src/app/Servicios/api-node.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private apiS: ApiNodeService, private router:Router) { }

  ngOnInit() {
  }

  login(email:any, password:any){
    this.apiS.loginUser(email.value, password.value).subscribe({
      next: (datos:any)=>{
        this.router.navigate(['/tabs-inicio'])
      },
      error:(e:any)=>{
        console.log(e);
      }
    })
    
    
  }

}
