import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceFormateurPage } from './espace-formateur.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceFormateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceFormateurPageRoutingModule {}
