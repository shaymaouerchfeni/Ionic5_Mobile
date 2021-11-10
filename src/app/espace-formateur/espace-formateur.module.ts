import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EspaceFormateurPageRoutingModule } from "./espace-formateur-routing.module";

import { EspaceFormateurPage } from "./espace-formateur.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EspaceFormateurPageRoutingModule,
  ],
  declarations: [EspaceFormateurPage],
})
export class EspaceFormateurPageModule {}
