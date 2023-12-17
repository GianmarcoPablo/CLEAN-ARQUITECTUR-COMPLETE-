import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entitiy";
import { TodoRepository } from "../../repositories/todo.repository";

export interface UpdateTodoUseCase {
    execute(updateDto: UpdateTodoDto): Promise<TodoEntity>;
}

export class UpdateTodo implements UpdateTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) { }
    execute(updateDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.repository.updateById(updateDto)
    }
}