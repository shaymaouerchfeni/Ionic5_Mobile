import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationsInstructorPageRoutingModule } from './formations-instructor-routing.module';

import { FormationsInstructorPage } from './formations-instructor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationsInstructorPageRoutingModule
  ],
  declarations: [FormationsInstructorPage]
})
export class FormationsInstructorPageModule {}
