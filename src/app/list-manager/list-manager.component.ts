import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-todo-item
            [item]="todoItem"
            (remove)="removeItem($event)"
          ></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  todoList: TodoItem[];
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(item: string) {
    this.todoListService.addItem(item);
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }
}