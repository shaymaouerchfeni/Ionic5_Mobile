import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTrainingPage } from './search-training.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTrainingPageRoutingModule {}
