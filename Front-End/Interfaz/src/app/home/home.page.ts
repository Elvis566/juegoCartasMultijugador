import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from '../Servicios/api-node.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  apodo: string= localStorage.getItem('apodo');
  foto: any= localStorage.getItem('foto');
  imageUrl: string | ArrayBuffer;

  constructor(private apiS: ApiNodeService) {}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    console.log(this.foto);
    this.apiS.getAvatar(this.foto).subscribe({
      next:(data:any)=> {
        debugger
        const bufferData = new Uint8Array(data.avatar.avatar.data);
        const blob = new Blob([bufferData], { type: 'image/jpg' }); // Asegúrate de que el tipo mime es correcto
        const reader = new FileReader();
        
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
        console.log(data.avatar.avatar.data);
      },
      error:(e:any)=>{
        debugger
        console.log(e);
      }
    })
  }
}
