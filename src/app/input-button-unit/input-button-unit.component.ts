import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  template: `
    <form class="todo-form">
      <mat-form-field>
        <input
          matInput
          placeholder="add new task"
          value="My task"
          class="todo-input"
          #inputElementRef
          (keyup.enter)="submitValue($event.target.value)"
        />
      </mat-form-field>

      <button
        mat-raised-button
        color="primary"
        (click)="submitValue(inputElementRef.value)"
      >
        save
      </button>
    </form>
  `,
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
