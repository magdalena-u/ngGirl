import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  template: `
    <mat-form-field class="full-width">
      <input
        matInput
        placeholder="new task"
        #inputElementRef
        (keyup.enter)="submitValue($event.target.value)"
      />
    </mat-form-field>
    <button
      color="primary"
      mat-raised-button
      (click)="submitValue(inputElementRef.value)"
    >
      save
    </button>
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
