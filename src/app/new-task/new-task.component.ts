import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-task",
  template: `
    <div class="todo-flex">
      <button
        mat-icon-button
        class="todo-button"
        (click)="discardNewTask($event)"
      >
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
  @Output() discard: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  discardNewTask(event) {
    this.discard.emit(event);
  }
}
