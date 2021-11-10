import { Component, OnInit } from "@angular/core";
import { TokenService } from "../services/token.service";
import { TrainingSessionService } from "../services/training-session.service";
import { environment } from "../../environments/environment";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx/index";
@Component({
  selector: "app-formations-instructor",
  templateUrl: "./formations-instructor.page.html",
  styleUrls: ["./formations-instructor.page.scss"],
})
export class FormationsInstructorPage implements OnInit {
  fileTransfer: FileTransferObject = this.transfer.create();

  trainingSessions = [];
  user: any;

  constructor(
    private trainingSessionService: TrainingSessionService,
    private tokenService: TokenService,
    private transfer: FileTransfer,
    private file: File
  ) {}

  ngOnInit() {
    this.getAllTrainingInstructorOrStudent();
  }

  async getAllTrainingInstructorOrStudent() {
    this.user = await this.tokenService.GetPayload();
    if (this.user.role == "instructor") {
      console.log("instructor", this.user);
      this.trainingSessionService
        .getAllTrainingSessionByInstructor(this.user._id)
        .subscribe((data) => {
          console.log(data);
          this.trainingSessions = data.trainingByInstructor;
        });
    }
    if (this.user.role == "student") {
      console.log("student", this.user);
      this.trainingSessionService
        .getAllTrainingSessionByStudent(this.user._id)
        .subscribe((data) => {
          console.log(data);
          this.trainingSessions = data.trainingByStudent;
        });
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
}
