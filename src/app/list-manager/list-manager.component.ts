import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../interfaces/todo-item";
import { TodoListService } from "../services/todo-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list-manager",
  template: `
    <form class="todo-app">
      <ul *ngIf="todoList | async as todoItems">
        <li *ngFor="let todoItem of todoItems">
          <app-todo-item
            [item]="todoItem"
            (remove)="removeItem($event)"
            (update)="updateItem($event.item, $event.changes)"
            (correct)="updateCorrectItem($event.correctItem, $event.item)"
          ></app-todo-item>
        </li>
      </ul>
      <app-todo-add-item
        (click)="changeMode()"
        [hidden]="newItemMode"
      ></app-todo-add-item>
      <app-input-button-unit
        [hidden]="!newItemMode"
        (submit)="addItem($event)"
      ></app-input-button-unit>
    </form>
  `,
  styleUrls: ["./list-manager.component.css"]
})
export class ListManagerComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  todoList: Observable<TodoItem[]>;

  private newItemMode = false;

  changeMode() {
    this.newItemMode = !this.newItemMode;
  }

  ngOnInit() {
    this.todoListService.retrievelListFromDatabase();
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
    this.changeMode();
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.todoListService.updateItem(item, changes);
  }

  updateCorrectItem(title, item) {
    this.todoListService.updateCorrectItem({ title }, item);
  }
}
