import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TrainingSessionService } from "../services/training-session.service";
import { TrainingService } from "../services/training.service";
import { environment } from "../../environments/environment";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx/index";
import { TokenService } from "../services/token.service";
@Component({
  selector: "app-formation-details",
  templateUrl: "./formation-details.page.html",
  styleUrls: ["./formation-details.page.scss"],
})
export class FormationDetailsPage implements OnInit {
  trainingId = null;
  trainingSessions: any = [];
  training: any;
  student: any;
  studentID = "";
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(
    private activatedRoute: ActivatedRoute,
    private trainingSessionService: TrainingSessionService,
    private trainingService: TrainingService,
    private transfer: FileTransfer,
    private file: File,
    private tokenService: TokenService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.trainingId = this.activatedRoute.snapshot.paramMap.get("id");
    this.student = await this.tokenService.GetPayload();
    console.log("student", this.student);
    console.log("myid", this.trainingId);
    this.getTraining(this.trainingId);
    this.getAllTrainingSessionByTraining(this.trainingId);
  }

  getTraining(id) {
    this.trainingService.getTraining(id).subscribe((data) => {
      console.log(data);
      this.training = data.trainingCourse;
      console.log("traning", this.training);
    });
  }

  getAllTrainingSessionByTraining(id) {
    this.trainingSessionService
      .getAllTrainingSessionByTraining(id)
      .subscribe((data) => {
        console.log(data);
        this.trainingSessions = data.trainingSessionByTraining;
      });
  }

  async inscription(id) {
    if (this.student) {
      if (this.student.role == "student") {
        console.log("student add", this.student);
        this.trainingSessionService
          .addStudent(id, this.student)
          .subscribe((data) => {
            console.log("add student", data);
            this.router.navigate(["/menu/formations-instructor"]);
          });
      }
    } else {
      this.router.navigate(["/menu/espace-condidat"]);
    }
  }
  download(program) {
    console.log("testdowload");
    const url = `${environment.apiUrl}/image/${program}`;
    this.fileTransfer.download(url, this.file.dataDirectory + "file.pdf").then(
      (entry) => {
        console.log("download complete: " + entry.toURL());
      },
      (error) => {
        // handle error
      }
    );
  }

  getStatus(id) {
    let trainingSession: any = [];
    let exist: any = [];

    trainingSession = this.trainingSessions.filter(
      (training) => training._id == id
    );

    if (this.student) {
      exist = trainingSession[0].students.filter(
        (s) => s._id == this.student._id
      );
    }

    console.log("status", status);
    if (exist.length !== 0) return true;
    else false;
  }
}
