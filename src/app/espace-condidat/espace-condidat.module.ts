import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EspaceCondidatPageRoutingModule } from "./espace-condidat-routing.module";

import { EspaceCondidatPage } from "./espace-condidat.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EspaceCondidatPageRoutingModule,
  ],
  declarations: [EspaceCondidatPage],
})
export class EspaceCondidatPageModule {}
