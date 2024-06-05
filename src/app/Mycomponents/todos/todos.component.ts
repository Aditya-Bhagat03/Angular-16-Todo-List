import { Component } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localitem: string | null;

  todos: Todo[];

  constructor() {
    this.localitem = localStorage.getItem('todos');
    if(this.localitem == null){
    this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localitem);
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo); 
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));  
  }
}
