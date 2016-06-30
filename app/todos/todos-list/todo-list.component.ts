import { Component, OnInit } from '@angular/core';

import {TodoModel} from '../shared/todo.model';
import {TodoService} from '../shared/todo.service';
import {TodoDetailComponent} from '../todo-detail/todo-detail.component'; 


@Component({
  selector:    'todo-list',
  moduleId:    module.id,  
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  directives:  [TodoDetailComponent],
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