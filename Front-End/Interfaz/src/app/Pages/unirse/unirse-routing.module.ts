import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnirsePage } from './unirse.page';

const routes: Routes = [
  {
    path: '',
    component: UnirsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnirsePageRoutingModule {}
