import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationsInstructorPage } from './formations-instructor.page';

const routes: Routes = [
  {
    path: '',
    component: FormationsInstructorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationsInstructorPageRoutingModule {}
