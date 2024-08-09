import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListFriendsPageRoutingModule } from './list-friends-routing.module';
import { ListFriendsPage } from './list-friends.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFriendsPageRoutingModule
  ],
  declarations: [ListFriendsPage],
  exports: [ListFriendsPage]
})
export class ListFriendsPageModule {}
