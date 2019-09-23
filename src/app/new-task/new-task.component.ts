import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-task",
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
  styleUrls: ["./new-task.component.css"]
})
export class NewTaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
