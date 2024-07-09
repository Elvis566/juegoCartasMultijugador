import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsInicioPage } from './tabs-inicio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsInicioPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'friends',
        loadChildren: () => import('./../../Tabs/friends/friends.module').then( m => m.FriendsPageModule)
      },
      {
        path: 'suggestions',
        loadChildren: () => import('./../../Tabs/suggestions/suggestions.module').then( m => m.SuggestionsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsInicioPageRoutingModule {}
