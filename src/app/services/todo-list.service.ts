import { Injectable } from "@angular/core";
import { TodoItem } from "../interfaces/todo-item";
import { StorageService } from "./storage.service";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

const todoStorageKey = "todo_item";

const defaultTodoList = [
  { title: "install NodeJS" },
  { title: "install Angular CLI" },
  { title: "create new app" },
  { title: "serve app" },
  { title: "develop app" },
  { title: "deploy app" }
];

@Injectable({
  providedIn: "root"
})
export class TodoListService {
  todoList: TodoItem[];
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) {
    this.todoList = storageService.getData(todoStorageKey) || defaultTodoList;
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }

  addItem(item: TodoItem) {
    this.http
      .post("http://localhost:3000/items", {
        title: item.title,
        completed: item.completed || false
      })
      .subscribe(() => this.retrievelListFromDatabase());
  }

  retrievelListFromDatabase() {
    this.http
      .get<TodoItem[]>("http://localhost:3000/items")
      .subscribe(response => this.todoListSubject.next(response));
  }

  saveData() {
    this.storageService.setData(todoStorageKey, this.todoList);
  }

  updateItem(item: TodoItem, changes: boolean) {
    this.http
      .put(`http://localhost:3000/items/${item._id}`, {
        title: item.title,
        completed: changes
      })
      .subscribe(() => this.retrievelListFromDatabase());
  }

  deleteItem(item: TodoItem) {
    return this.http
      .delete(`http://localhost:3000/items/${item._id}`)
      .subscribe(() => this.retrievelListFromDatabase());
  }

  updateCorrectItem(correctItem, item) {
    return this.http
      .put(`http://localhost:3000/items/${item._id}`, {
        title: correctItem.title,
        completed: correctItem.completed || false
      })
      .subscribe(() => this.retrievelListFromDatabase());
  }
}
