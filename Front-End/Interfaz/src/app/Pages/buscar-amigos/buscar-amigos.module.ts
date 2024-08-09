import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuscarAmigosPageRoutingModule } from './buscar-amigos-routing.module';
import { BuscarAmigosPage } from './buscar-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarAmigosPageRoutingModule
  ],
  declarations: [BuscarAmigosPage],
  exports: [BuscarAmigosPage]
})
export class BuscarAmigosPageModule {}
