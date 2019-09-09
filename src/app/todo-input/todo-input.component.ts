import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input
      (keyup.esc)="cancelCorrectItem()"
      (keyup.enter)="updateCorrectItem($event.target.value)"
    />
  `,
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cancelCorrectItem() {
    this.cancel.emit();
  }

  updateCorrectItem(item) {
    this.submit.emit(item);
  }
}
