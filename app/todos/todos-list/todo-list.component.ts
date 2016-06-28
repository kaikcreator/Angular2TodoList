import { Component, OnInit } from '@angular/core';

import {TodoModel} from '../shared/todo.model';
import {TodoService} from '../shared/todo.service';


@Component({
  selector:    'todo-list',
  templateUrl: 'todo-list.component.html',
  moduleId:    module.id,
  //directives:  [TodoDetailComponent],
  providers:   [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[];
  selectedTodo: TodoModel;
  
  constructor(private service: TodoService) { }
  
  ngOnInit() {
    this.todos = this.service.getTodos();
  }
  
  selectTodo(todo: TodoModel) { this.selectedTodo = todo; }

  /* example of dynamic styling*/
  setTodoStyles(item:any){
    let styles= {
        'text-decoration': item.isDone ? 'line-through' : 'none',
        'font-weight': item.isImportant ? '600' : 'normal',
    };
    return styles;
}
}