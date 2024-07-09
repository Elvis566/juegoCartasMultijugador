import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./LoginRegister/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./LoginRegister/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs-inicio',
    loadChildren: () => import('./Tabs/tabs-inicio/tabs-inicio.module').then( m => m.TabsInicioPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./Pages/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./Pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'unirse',
    loadChildren: () => import('./Pages/unirse/unirse.module').then( m => m.UnirsePageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./Pages/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'list-friends',
    loadChildren: () => import('./Pages/list-friends/list-friends.module').then( m => m.ListFriendsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./Pages/chat/chat.module').then( m => m.ChatPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
