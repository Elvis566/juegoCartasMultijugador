import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FriendsPageRoutingModule } from './friends-routing.module';
import { FriendsPage } from './friends.page';
import { ListFriendsPageModule } from "../../Pages/list-friends/list-friends.module";
import { BuscarAmigosPageModule } from 'src/app/Pages/buscar-amigos/buscar-amigos.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsPageRoutingModule,
    ListFriendsPageModule,
    BuscarAmigosPageModule
],
  declarations: [FriendsPage]
})
export class FriendsPageModule {}
