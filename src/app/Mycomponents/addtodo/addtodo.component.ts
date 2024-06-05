import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../../todo'; // Import Todo model if not already imported

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
  title:string='';;
  desc:string ='';;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>(); // Import and use EventEmitter here

  onSubmit() {
    const todo: Todo = {
      sno: 5,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
  }
}
