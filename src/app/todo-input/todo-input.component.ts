import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-todo-input",
  template: `
    <input
      [value]="title"
      (keyup.esc)="cancelCorrectItem()"
      (keyup.enter)="updateCorrectItem($event.target.value)"
    />
  `,
  styleUrls: ["./todo-input.component.css"]
})
export class TodoInputComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  cancelCorrectItem() {
    this.cancel.emit();
  }

  updateCorrectItem(item) {
    this.submit.emit(item);
  }
}
