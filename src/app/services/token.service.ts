import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject, Observable } from "rxjs";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  private currentTokenSubject = new BehaviorSubject<any>(null); // <-- assign default value here

  constructor(private storage: Storage) {
    this.GetToken().then((res) => {
      console.log("getToken", res);
      this.currentTokenSubject.next(res); // <-- push token to the observable
    });
  }

  currentTokenValue(): Observable<string> {
    return this.currentTokenSubject.asObservable(); // <-- return observable here
  }

  SetToken(token) {
    this.storage.set("Token", token);
    this.currentTokenSubject.next(true);
  }

  GetToken() {
    return this.storage.get("Token");
  }

  DeleteToken() {
    this.storage.remove("Token");
    this.currentTokenSubject.next(false);
  }

  async GetPayload() {
    let payload: any;
    let user: any;
    await this.GetToken().then((token) => {
      if (token) {
        payload = token.split(".")[1];
        payload = JSON.parse(window.atob(payload));
        user = payload.data;
      }
    });
    console.log("test", user);

    return user;
  }
}
