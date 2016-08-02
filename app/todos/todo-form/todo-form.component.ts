import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { TodoModel }    from '../shared/todo.model';


@Component({
  selector: 'todo-form',
  templateUrl: 'app/todos/todo-form/todo-form.component.html'
})

export class TodoFormComponent {
  model = new TodoModel('new subject', 'new content', false, false);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}