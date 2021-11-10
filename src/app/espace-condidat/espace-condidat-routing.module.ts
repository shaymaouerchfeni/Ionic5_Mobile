import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceCondidatPage } from './espace-condidat.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceCondidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceCondidatPageRoutingModule {}
