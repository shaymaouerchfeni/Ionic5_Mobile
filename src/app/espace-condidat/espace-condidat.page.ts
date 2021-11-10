import { Component, OnInit } from "@angular/core";
import { TokenService } from "../services/token.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-espace-condidat",
  templateUrl: "./espace-condidat.page.html",
  styleUrls: ["./espace-condidat.page.scss"],
})
export class EspaceCondidatPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  showSpinner = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  loginUser() {
    this.showSpinner = true;
    this.authService.loginUser(this.loginForm.value).subscribe(
      (data) => {
        this.tokenService.SetToken(data.token);

        this.loginForm.reset();
        this.router.navigate(["menu/formations-instructor"]);
      },
      (err) => {
        this.showSpinner = false;

        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
