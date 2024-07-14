import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAPage } from './select-a.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAPageRoutingModule {}
