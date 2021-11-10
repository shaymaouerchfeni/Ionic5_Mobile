import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { TokenService } from "../services/token.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  activePath = "";

  pagesStatic = [
    {
      token: true,
      name: "Home",
      path: "/menu/home",
    },
    {
      token: true,
      name: "Rechercher une formation",
      path: "/menu/search-training",
    },
  ];
  pages = [
    {
      token: true,
      name: "Espace formateur",
      path: "/menu/espace-formateur",
    },
    {
      token: true,
      name: "Espace Condidat",
      path: "/menu/espace-condidat",
    },

    {
      token: false,
      name: "mes formation",
      path: "/menu/formations-instructor",
    },
    {
      token: false,
      name: "logout",
      path: "/menu/logout",
    },
  ];

  constructor(private router: Router, private tokenService: TokenService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

  ngOnInit() {
    this.tokenService.currentTokenValue().subscribe((token) => {
      console.log("menu token", token);
      if (token) {
        this.pages.map((p) => {
          p.token = p.token ? false : true;
        });
      } else {
        if (token !== null) {
          this.pages.map((p) => {
            p.token = p.token ? false : true;
          });
        }
      }
    });
  }

  logout(event) {
    if (event == "logout") {
      this.tokenService.DeleteToken();
    }
  }
}
