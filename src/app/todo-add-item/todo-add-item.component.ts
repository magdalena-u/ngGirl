import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-add-item",
  template: `
    <div class="todo-flex">
      <button mat-icon-button class="todo-button">
        <mat-icon
          class="todo-icon"
          svgIcon="plus"
          aria-hidden="false"
          aria-label="plus icon"
        ></mat-icon>
      </button>
      <span class="todo-span">Add new task</span>
    </div>
  `,
  styleUrls: ["./todo-add-item.component.css"]
})
export class TodoAddItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
