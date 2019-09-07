import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { emit } from 'cluster';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      class="todo-input"
      #inputElementRef
      (keyup.enter)="submitValue($event.target.value)"
    />
    <button class="btn" (click)="submitValue(inputElementRef.value)">
      save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
