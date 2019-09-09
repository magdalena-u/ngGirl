import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox" class="todo-checkbox" (click)="completeItem()" />

      <span
        [ngClass]="{ 'todo-complete': item.completed }"
        [hidden]="editable"
        (click)="correctItem()"
        #spanElementRef
        >{{ item.title }}</span
      >

      <app-todo-input
        [hidden]="!editable"
        (cancel)="cancelCorrectItem()"
        (submit)="updateCorrectItem($event)"
      ></app-todo-input>

      <button (click)="removeItem()">remove</button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() correct: EventEmitter<any> = new EventEmitter();

  constructor() {}

  private editable = false;

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  correctItem() {
    this.editable = true;
  }

  cancelCorrectItem() {
    this.editable = false;
  }
  // nasluchiwanie na sibling element
  updateCorrectItem(correctItem) {
    this.editable = false;
    this.correct.emit({ correctItem, item: this.item });
  }
}
