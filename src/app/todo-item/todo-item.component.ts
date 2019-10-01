import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TodoItem } from "../interfaces/todo-item";

@Component({
  selector: "app-todo-item",
  template: `
    <div class="todo-item">
      <input
        type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"
        [checked]="item.completed"
      />

      <span
        [ngClass]="{ 'todo-complete': item.completed }"
        [hidden]="editable"
        (dblclick)="correctItem()"
        #spanElementRef
        >{{ item.title }}</span
      >

      <app-todo-input
        [hidden]="!editable"
        (cancel)="cancelCorrectItem()"
        (submit)="updateCorrectItem($event)"
        [title]="item.title"
      ></app-todo-input>

      <button mat-icon-button color="primary" (click)="removeItem()">
        <mat-icon
          svgIcon="trash"
          aria-hidden="false"
          aria-label="trash"
        ></mat-icon>
      </button>
    </div>
  `,
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<object> = new EventEmitter();
  @Output() correct: EventEmitter<object> = new EventEmitter();

  constructor() {}

  private editable = false;

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: !this.item.completed
    });
  }

  correctItem() {
    this.editable = true;
  }

  cancelCorrectItem() {
    this.editable = false;
  }

  updateCorrectItem(correctItem) {
    this.editable = false;
    this.correct.emit({ correctItem, item: this.item });
  }
}
