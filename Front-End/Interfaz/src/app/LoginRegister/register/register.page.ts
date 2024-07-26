import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  

  constructor(private router:Router) { }

  // ngOnInit() {
    
  // }

  validatorPassword(primeraP: any, segundaP: any): boolean {
    if (primeraP === segundaP) {
      console.log('hola desde la confirmacion');
      return true;
    } else {
      return false;
    }
  }
  

  pasar(email:any, password1:any, password:any){
    debugger
    const vp = this.validatorPassword(password1.value, password.value)
    console.log(vp);
    if(vp){
      debugger
      localStorage.setItem('email', email.value)
      localStorage.setItem('password', password.value)
      this.router.navigate(['/select-a'])
      console.log('ya pasaste');
    }
  }

}
