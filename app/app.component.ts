import {Component} from '@angular/core';
import {TodoListComponent} from './todos/todos-list/todo-list.component';
import {TodoFormComponent} from './todos/todo-form/todo-form.component';
import { Logger } from './shared/logger.service';

@Component({
    selector: 'my-app',
    template: `<h1>ToDo List example</h1>
                <todo-form></todo-form>
                <todo-list></todo-list>`,
    directives: [TodoListComponent, TodoFormComponent],
    providers: [Logger]
})
export class AppComponent { }
