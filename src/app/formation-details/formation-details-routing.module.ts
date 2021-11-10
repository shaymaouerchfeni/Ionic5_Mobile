import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationDetailsPage } from './formation-details.page';

const routes: Routes = [
  {
    path: '',
    component: FormationDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationDetailsPageRoutingModule {}
