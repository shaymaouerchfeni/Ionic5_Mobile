import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TrainingService } from "src/app/services/training.service";
import { TokenService } from "../services/token.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  trainingCourses: any = [];

  constructor(
    private trainingService: TrainingService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allTraining();
    let token = this.tokenService.GetToken();
    console.log("home token", token);
  }

  allTraining() {
    this.trainingService.getAllTraining().subscribe(
      (data) => {
        console.log(data);
        this.trainingCourses = data.trainingCourses;
        console.log("training", this.trainingCourses);
      },
      (err) => {}
    );
  }

  goToPageDetails(id) {
    console.log(id);
    this.router.navigateByUrl("menu/formation-details");
  }
}
