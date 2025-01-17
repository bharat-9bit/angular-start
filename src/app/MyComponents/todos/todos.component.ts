import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
      todos: Todo[] = []; 
      localtem: string|null;
      constructor(){
        this.localtem=localStorage.getItem("todos");
        if(this.localtem==null){
        this.todos=[];
        }
        else{
          this.todos=JSON.parse(this.localtem)
        }
      }
      deleteTodo(todo:Todo){
             console.log(todo)
             const index = this.todos.indexOf(todo);
             this.todos.splice(index, 1);
             localStorage.setItem("todos",JSON.stringify(this.todos));
      }
      addTodo(todo:Todo){
        console.log(todo)
        this.todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(this.todos));
 }
}
