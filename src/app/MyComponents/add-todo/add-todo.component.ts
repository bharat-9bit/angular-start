import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
   title!: string;
   desc!: string;
   @Output() todoadd:EventEmitter<Todo> = new EventEmitter();

   onSubmit(){
    const todo ={
      sno: TodoItemComponent.length+1,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoadd.emit(todo);
   }
}
