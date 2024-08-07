import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaEsperaPageRoutingModule } from './sala-espera-routing.module';

import { SalaEsperaPage } from './sala-espera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaEsperaPageRoutingModule
  ],
  declarations: [SalaEsperaPage]
})
export class SalaEsperaPageModule {}
