import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { TodoModel }    from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'todo-form',
  templateUrl: 'app/todos/todo-form/todo-form.component.html',
  providers:   [TodoService]
})

export class TodoFormComponent {
  model = new TodoModel('', 'new content', false, false);
  submitted = false;
  active = true;

  constructor(private todoService:TodoService){}

  newTodo(){
    this.model = new TodoModel('', '', false, false);
    this.active = false;
    setTimeout(()=>{this.active = true;}, 0);
  }
  onSubmit() { 
    this.submitted = true;
    this.todoService.addTodo(this.model);
    this.newTodo();
  }
}