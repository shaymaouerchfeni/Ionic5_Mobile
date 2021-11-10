import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../environments/environment";
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: `${environment.apiUrl}/upload`,
    itemAlias: "image",
  });
  pictureToUpload: string;
  cvToUpload: string;
  studentForm: FormGroup;
  errorMessage: string;
  msSuccess: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.init();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log("Uploaded File Details:", item);
    };
  }

  init() {
    this.studentForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      cardNumber: ["", Validators.required],
      picture: [""],
      cv: [""],
      role: [""],
    });
  }

  pictureChangeEvent(fileInput: any) {
    this.pictureToUpload = fileInput.target.files[0]["name"];
    console.log("filechange", this.studentForm.value);
  }

  cvChangeEvent(fileInput: any) {
    this.cvToUpload = fileInput.target.files[0]["name"];
    console.log("filechange", this.studentForm.value);
  }

  addStudent() {
    console.log("fff", this.studentForm.value);
    this.studentForm.value.role = "student";
    console.log("picture", this.pictureToUpload);
    console.log("cv", this.cvToUpload);

    this.studentForm.value.picture = this.pictureToUpload;
    this.studentForm.value.cv = this.cvToUpload;

    this.authService.registerUser(this.studentForm.value).subscribe(
      (data) => {
        this.studentForm.reset();
        this.pictureToUpload = "";
        this.cvToUpload = "";
        this.msSuccess = "created successfully";
        setTimeout(() => {
          this.msSuccess = "";
        }, 1000);
        this.errorMessage = "";
        console.log(data);
      },
      (err) => {
        if (err.error.msg) {
          this.errorMessage = err.error.msg[0].message;
        }
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
