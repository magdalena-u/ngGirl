import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  template: `
    <p>{{ title }}</p>
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="changeTitle(inputElementRef)"
    />
    <button (click)="changeTitle(inputElementRef)">save</button>
  `,
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
  title = "hello hello!";
  constructor() {}

  ngOnInit() {}

  changeTitle(inputElementRef) {
    this.title = inputElementRef.value;
  }
}
