import {Injectable} from '@angular/core';
import { TodoModel } from './todo.model';
import { Logger } from '../../shared/logger.service';

@Injectable()
export class TodoService{

    todos:TodoModel[] = [
        new TodoModel("primer todo", "este es mi primer todo"),
        new TodoModel("segundo todo", "mi segundo todo", true),
        new TodoModel("tercer todo", "otro todo más por hacer", false, true)
    ];

    constructor(public logger: Logger){}

    addTodo(todo:TodoModel){
        this.todos = [...this.todos, todo];
        this.logger.log(this.todos);
    }

    getTodos(){
        this.logger.log(this.todos);
        return this.todos;
    }

}