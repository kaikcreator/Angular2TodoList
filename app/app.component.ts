import {Component} from '@angular/core';
import {TodoListComponent} from './todos/todos-list/todo-list.component';
import { Logger } from './shared/logger.service';

@Component({
    selector: 'my-app',
    template: `<h1>ToDo List example</h1>
                <todo-list></todo-list>`,
    directives: [TodoListComponent],
    providers: [Logger]
})
export class AppComponent { }
