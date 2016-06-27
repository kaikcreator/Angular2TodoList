export class TodoService{
    getTodos(){
        return[
            {subject: "todo 1", content: "this is my first todo", done:false},
            {subject: "todo 2", content: "this is my second todo", done:false},
            {subject: "third todo", content: "this is my thrid todo", done:false}
        ]
    }
}