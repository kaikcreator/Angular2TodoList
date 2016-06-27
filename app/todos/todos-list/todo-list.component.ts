import { Component, OnInit } from '@angular/core';

import {Todo} from '../shared/todo.model';
import {TodoService} from '../shared/todo.service';


@Component({
  selector:    'todo-list',
  templateUrl: 'todo-list.component.html',
  moduleId:    module.id,
  //directives:  [TodoDetailComponent],
  providers:   [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;
  
  constructor(private service: TodoService) { }
  
  ngOnInit() {
    this.todos = this.service.getTodos();
  }
  
  selectTodo(todo: Todo) { this.selectedTodo = todo; }
}