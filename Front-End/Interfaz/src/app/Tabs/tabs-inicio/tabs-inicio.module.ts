import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsInicioPageRoutingModule } from './tabs-inicio-routing.module';

import { TabsInicioPage } from './tabs-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsInicioPageRoutingModule
  ],
  declarations: [TabsInicioPage]
})
export class TabsInicioPageModule {}
