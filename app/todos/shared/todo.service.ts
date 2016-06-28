export class TodoService{
    getTodos(){
        return[
            {subject: "todo 1", content: "this is my first todo", isDone:false, isImportant:false},
            {subject: "todo 2", content: "this is my second todo", isDone:true, isImportant:false},
            {subject: "third todo", content: "this is my thrid todo", isDone:false, isImportant:true}
        ]
    }
}