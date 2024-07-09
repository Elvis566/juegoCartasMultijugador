import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirsePageRoutingModule } from './unirse-routing.module';

import { UnirsePage } from './unirse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirsePageRoutingModule
  ],
  declarations: [UnirsePage]
})
export class UnirsePageModule {}
