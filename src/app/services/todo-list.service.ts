import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoStorageKey = 'todo_item';

const defaultTodoList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' }
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoStorageKey) || defaultTodoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(title: string) {
    this.todoList.push({ title });
    this.saveData();
  }

  saveData() {
    this.storageService.setData(todoStorageKey, this.todoList);
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveData();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveData();
  }

  updateCorrectItem(correctItem, item) {
    const index = this.todoList.indexOf(item);
    this.todoList[index].title = correctItem;
    this.saveData();
  }
}
