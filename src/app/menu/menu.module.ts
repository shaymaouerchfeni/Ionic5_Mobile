import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "home",
        loadChildren: "../home/home.module#HomePageModule",
      },
      {
        path: "search-training",
        loadChildren:
          "../search-training/search-training.module#SearchTrainingPageModule",
      },
      {
        path: "espace-formateur",
        loadChildren:
          "../espace-formateur/espace-formateur.module#EspaceFormateurPageModule",
      },
      {
        path: "espace-condidat",
        loadChildren:
          "../espace-condidat/espace-condidat.module#EspaceCondidatPageModule",
      },
      {
        path: "formations-instructor",
        loadChildren:
          "../formations-instructor/formations-instructor.module#FormationsInstructorPageModule",
      },
      {
        path: "formation-details/:id",
        loadChildren:
          "../formation-details/formation-details.module#FormationDetailsPageModule",
      },

      {
        path: "register",
        loadChildren: "../register/register.module#RegisterPageModule",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/menu/home",
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MenuPage],
})
export class MenuPageModule {}
