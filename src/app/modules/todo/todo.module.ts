import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
