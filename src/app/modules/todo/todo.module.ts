import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { MatCheckboxModule, MatInputModule  } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CommonModule,
    DragulaModule,
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [
    TodoItemComponent,
    TodoListComponent,
  ],
  exports: [
    TodoItemComponent,
    TodoListComponent,
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
