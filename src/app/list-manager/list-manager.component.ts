import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../interfaces/todo-item";
import { TodoListService } from "../services/todo-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list-manager",
  template: `
    <div class="todo-app">
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
      <app-new-task
        [hidden]="newTaskMode"
        (click)="changeMode($event)"
      ></app-new-task>
      <app-input-button-unit
        [hidden]="!newTaskMode"
        (submit)="addItem($event)"
        (discard)="changeMode()"
      ></app-input-button-unit>
    </div>
  `,
  styleUrls: ["./list-manager.component.css"]
})
export class ListManagerComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  todoList: Observable<TodoItem[]>;

  private newTaskMode = false;

  changeMode() {
    this.newTaskMode = !this.newTaskMode;
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
