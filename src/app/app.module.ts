import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { InputButtonUnitComponent } from "./input-button-unit/input-button-unit.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { ListManagerComponent } from "./list-manager/list-manager.component";
import { TodoListService } from "./services/todo-list.service";
import { TodoInputComponent } from "./todo-input/todo-input.component";

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    TodoInputComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
