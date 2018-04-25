import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { TodoComponent } from './todo.component';
import { MatCheckboxModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    MatCheckboxModule
  ],
  declarations: [
    TodoComponent,
  ],
  exports: [
    TodoComponent,
  ]
})
export class TodoModule { }
