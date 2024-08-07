import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaEsperaPage } from './sala-espera.page';

const routes: Routes = [
  {
    path: '',
    component: SalaEsperaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaEsperaPageRoutingModule {}
