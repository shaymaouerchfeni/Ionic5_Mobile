import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTrainingPageRoutingModule } from './search-training-routing.module';

import { SearchTrainingPage } from './search-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTrainingPageRoutingModule
  ],
  declarations: [SearchTrainingPage]
})
export class SearchTrainingPageModule {}
