import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  getData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: TodoItem[]) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
}
