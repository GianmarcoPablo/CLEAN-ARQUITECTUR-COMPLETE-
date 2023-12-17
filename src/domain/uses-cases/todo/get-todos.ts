import { TodoEntity } from "../../entities/todo.entitiy";
import { TodoRepository } from "../../repositories/todo.repository";

export interface GetAllTodosUseCase {
    execute(): Promise<TodoEntity[]>;
}

export class GetAllTodos implements GetAllTodosUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) { }

    execute(): Promise<TodoEntity[]> {
        return this.repository.getAll()
    }
}