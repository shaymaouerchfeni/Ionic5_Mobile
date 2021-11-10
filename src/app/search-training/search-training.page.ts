import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TrainingService } from "src/app/services/training.service";
import { TokenService } from "../services/token.service";

@Component({
  selector: "app-search-training",
  templateUrl: "./search-training.page.html",
  styleUrls: ["./search-training.page.scss"],
})
export class SearchTrainingPage implements OnInit {
  trainingCourses: any = [];
  trainingToShow: any = [];
  search = "";

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
        this.trainingToShow = this.trainingCourses;

        console.log("training", this.trainingCourses);
      },
      (err) => {}
    );
  }

  goToPageDetails(id) {
    console.log(id);
    this.router.navigateByUrl("menu/formation-details");
  }

  searchByTag(event) {
    console.log("search", event);
    this.trainingToShow = this.trainingCourses;
    // let a = this.trainingToShow[0].tags.filter((tag) => {
    //   console.log("tag", tag);
    //   return tag.toLowerCase().search(event) !== -1;
    // });
    // console.log("a", a);
    this.trainingToShow = this.trainingToShow.filter((training) => {
      return (
        training.tags.filter((tag) => {
          console.log("tag", tag);
          return tag.toLowerCase().search(event) !== -1;
        }).length != 0
      );
    });
    console.log("trainig to show", this.trainingToShow);
  }
}
