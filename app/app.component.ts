import {Component} from '@angular/core';
import {TodoListComponent} from './todos/todos-list/todo-list.component';

@Component({
    selector: 'my-app',
    template: `<h1>ToDo List example</h1>
                <todo-list></todo-list>`,
    directives: [TodoListComponent]
})
export class AppComponent { }
