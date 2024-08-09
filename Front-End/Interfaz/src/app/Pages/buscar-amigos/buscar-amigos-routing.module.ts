import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarAmigosPage } from './buscar-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarAmigosPageRoutingModule {}
