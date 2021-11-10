import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FormationDetailsPageRoutingModule } from "./formation-details-routing.module";

import { FormationDetailsPage } from "./formation-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationDetailsPageRoutingModule,
  ],
  declarations: [FormationDetailsPage],
})
export class FormationDetailsPageModule {}
