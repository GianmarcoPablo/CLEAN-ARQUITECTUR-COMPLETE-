import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entitiy";
import { TodoRepository } from "../../repositories/todo.repository";

export interface DeleteTodoUseCase {
    execute(id: number): Promise<TodoEntity>;
}

export class DeleteTodo implements DeleteTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) { }
    execute(id: number): Promise<TodoEntity> {
        return this.repository.deleteByid(id)
    }
}