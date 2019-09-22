import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  template: `
    <h1 class="app-title">Welcome {{ title }}</h1>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    {
      this.matIconRegistry.addSvgIcon(
        "trash",
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          "../assets/trash-solid.svg"
        )
      );
    }
  }
  title = "To Do App";
}
