import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { InputButtonUnitComponent } from "./input-button-unit/input-button-unit.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { ListManagerComponent } from "./list-manager/list-manager.component";
import { TodoListService } from "./services/todo-list.service";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { MaterialModule } from "./material/material.module";
import { TodoAddItemComponent } from "./todo-add-item/todo-add-item.component";

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    TodoInputComponent,
    TodoAddItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
