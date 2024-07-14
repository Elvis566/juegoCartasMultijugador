import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAPageRoutingModule } from './select-a-routing.module';

import { SelectAPage } from './select-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectAPageRoutingModule
  ],
  declarations: [SelectAPage]
})
export class SelectAPageModule {}
