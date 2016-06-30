import { Component, Input } from '@angular/core';
import { TodoModel } from '../shared/todo.model';


@Component({
    moduleId: module.id,
    selector: 'todo-detail',
    template: ` <div *ngIf="todo">
                    <h2>Selected todo:</h2>
                    <div class="subject">{{todo.subject}}</div>
                    <div>{{todo.content}}</div>
                </div>`,
    styles:[`
        .subject{
            font-weight: 600;
            font-style: italic;
            margin-bottom: 0.2em;
        }
    `]
})
export class TodoDetailComponent {
    @Input()
    todo: TodoModel;

    constructor() { }

}